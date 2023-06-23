import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect, use as chaiUse } from "chai";
import chaiAsPromised from "chai-as-promised";
import { ethers } from "hardhat";
import { TokenshopEnglishAuction } from "../typechain";

chaiUse(chaiAsPromised);

describe("English Auction", function () {
  const MINTER_ROLE =
    "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";
  const MINTER_ROLE_MANAGER =
    "0x3d56c6b2572263081c65bd5409e23369bba6fe5164eaf66eb49349dcd212d6d3";

  const ONE_ETH = ethers.utils.parseEther("1");
  const TOKEN_ID = 0;

  // contracts
  let englishAuction: TokenshopEnglishAuction;

  // accounts
  let accounts: SignerWithAddress[];
  let feeAccount: SignerWithAddress;
  let minter: SignerWithAddress;
  let minterRoleManager: SignerWithAddress;
  let collector: SignerWithAddress;

  beforeEach(async function () {
    // constants
    const NAME = "TOKENSHOP";
    const SYMBOL = "TSP";
    const BASE_URL = "https://ipfs.io/ipfs/";
    const TOKEN_URI = "QmVtRMhihBCgRirW8PUeFGJVfb9Bgq6uz8o8pXnmdsiyeM";

    accounts = await ethers.getSigners();

    feeAccount = accounts[0];
    minterRoleManager = accounts[1];
    minter = accounts[2];
    collector = accounts[3];

    /// deploy erc721 contract
    const TokenshopNFT = await ethers.getContractFactory("TokenshopNFT");
    const erc721 = await TokenshopNFT.deploy(
      NAME,
      SYMBOL,
      BASE_URL,
      feeAccount.address
    );

    /// deploy english auction contract
    const TokenshopEnglishAuction = await ethers.getContractFactory(
      "TokenshopEnglishAuction"
    );
    englishAuction = await TokenshopEnglishAuction.deploy(erc721.address);

    /// deploy marketplace contract
    const TokenshopMarketplace = await ethers.getContractFactory(
      "TokenshopMarketplace"
    );
    const marketplace = await TokenshopMarketplace.deploy(erc721.address);

    const CONTRACT_ROLE_STRING = ethers.utils.toUtf8Bytes("CONTRACT_ROLE");
    const CONTRACT_ROLE = ethers.utils.keccak256(CONTRACT_ROLE_STRING);

    await Promise.all([
      erc721.grantRole(MINTER_ROLE, marketplace.address), // grant Minter role to marketplace contract
      erc721.grantRole(CONTRACT_ROLE, marketplace.address), // grant Minter role to marketplace contract
      erc721.grantRole(CONTRACT_ROLE, englishAuction.address), // grant Minter role to marketplace contract
      marketplace.grantRole(MINTER_ROLE_MANAGER, minterRoleManager.address),
      erc721.connect(minter).setApprovalForAll(englishAuction.address, true),
    ]);

    await marketplace
      .connect(minterRoleManager)
      .grantRole(MINTER_ROLE, minter.address);

    await marketplace.connect(minter).mint(TOKEN_URI, 0); // mint token
  });

  // test 1: create auction
  describe("deploy contracts, create auction", () => {
    describe("success", () => {
      it("should create an auction", async () => {
        const auctionId = 1;
        await expect(
          englishAuction.connect(minter).createAuction(TOKEN_ID, ONE_ETH)
        )
          .to.emit(englishAuction, "Created")
          .withArgs(TOKEN_ID, minter.address, auctionId, ONE_ETH);
      });
    });

    describe("failure", () => {
      it("should revert if price is zero", async () => {
        await expect(englishAuction.connect(minter).createAuction(TOKEN_ID, 0))
          .to.be.reverted;
      });
    });
  });

  // test 2: update auction
  describe("deploy contract, update auction", () => {
    let auctionId: number;
    beforeEach(async () => {
      const tx = await englishAuction
        .connect(minter)
        .createAuction(TOKEN_ID, ONE_ETH);
      const result = await tx.wait();
      // @ts-ignore
      auctionId = parseInt(result.events[2].args.auctionId);
    });

    describe("success", () => {
      it("should allow the auction owner to update the auction", async () => {
        const newPrice = ONE_ETH.add(20000);

        await expect(
          englishAuction.connect(minter).updateAuction(auctionId, newPrice)
        )
          .to.emit(englishAuction, "Updated")
          .withArgs(auctionId, newPrice);
      });
    });

    describe("failure", () => {
      it("should revert if new price is zero", async () => {
        const newPrice = 0;
        await expect(
          englishAuction.connect(minter).updateAuction(auctionId, newPrice)
        ).to.reverted;
      });
      it("should revert if not the auction creator", async () => {
        const newPrice = 0;
        await expect(
          englishAuction.updateAuction(auctionId, newPrice)
        ).to.rejectedWith("must be auction creator");
      });

      it("should not allow to update if auction is stared", async () => {
        const bidAmount = ONE_ETH.add(5000);
        const newPrice = ONE_ETH.add(20000);

        await englishAuction
          .connect(collector)
          .placeBid(auctionId, { value: bidAmount });

        await expect(
          englishAuction.connect(minter).updateAuction(auctionId, newPrice)
        ).to.rejectedWith("auction already started");
      });
    });
  });

  // test 3: cancel auction
  describe("deploy contract, cancel auction", () => {
    let auctionId: number;
    beforeEach(async () => {
      const tx = await englishAuction
        .connect(minter)
        .createAuction(TOKEN_ID, ONE_ETH);
      const result = await tx.wait();
      // @ts-ignore
      auctionId = parseInt(result.events[2].args.auctionId);
    });

    describe("success", () => {
      it("should allow the auction owner to cancel the auction", async () => {
        await expect(englishAuction.connect(minter).cancelAuction(auctionId))
          .to.emit(englishAuction, "Canceled")
          .withArgs(auctionId);
      });
    });
    describe("failure", () => {
      it("should revert if not the auction creator", async () => {
        await expect(englishAuction.cancelAuction(auctionId)).to.rejectedWith(
          "must be auction creator"
        );
      });

      it("should not allow to cancel if auction is stared", async () => {
        const bidAmount = ONE_ETH.add(5000);

        await englishAuction
          .connect(collector)
          .placeBid(auctionId, { value: bidAmount });

        await expect(
          englishAuction.connect(minter).cancelAuction(auctionId)
        ).to.rejectedWith("auction already started");
      });
    });
  });
  // test 4: bid on auction

  describe("deploy contract, place bid", () => {
    let auctionId: number;
    beforeEach(async () => {
      const tx = await englishAuction
        .connect(minter)
        .createAuction(TOKEN_ID, ONE_ETH);
      const result = await tx.wait();
      // @ts-ignore
      auctionId = parseInt(result.events[2].args.auctionId);
    });

    describe("success", () => {
      it("should allow to place bid", async () => {
        const bidAmount = ONE_ETH.add(5000);

        const tx = await englishAuction
          .connect(collector)
          .placeBid(auctionId, { value: bidAmount });

        const result = await tx.wait();
        // @ts-ignore
        const event = result.events[0];
        const args = event.args;

        const block = await ethers.provider.getBlock(result.blockNumber);
        const endTime = block.timestamp + 3600 * 24;
        expect(event.event).to.be.eq("Bid");
        // @ts-ignore
        expect(args.bidder).to.be.eq(collector.address);
        // @ts-ignore
        expect(args.tokenId).to.be.eq(TOKEN_ID);
        // @ts-ignore
        expect(args.auctionId).to.be.eq(auctionId);
        // @ts-ignore
        expect(args.price).to.be.eq(bidAmount);
        // @ts-ignore
        expect(args.end).to.be.eq(endTime);
      });
    });
  });
});
