// eslint-disable-next-line node/no-unpublished-import
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect, use as chaiUse } from "chai";
import chaiAsPromised from "chai-as-promised";
import { ethers } from "hardhat";
// eslint-disable-next-line node/no-unpublished-import, node/no-missing-import
import { TokenshopNFT } from "../typechain";

chaiUse(chaiAsPromised);

describe("erc721", function () {
  let erc721: TokenshopNFT;

  let accounts: SignerWithAddress[];
  let minter: SignerWithAddress;
  let marketplaceFeeAccount: SignerWithAddress;

  const NAME = "NAME";
  const SYMBOL = "SYMOBOL";
  const BASE_URL = "http://dummy.url/";
  const PRIMARY_PLATFORM_FEE = 1300;
  const SECONDARY_PLATFORM_FEE = 300;

  const TOKEN_URI = BASE_URL + "0";
  const ZERO_ADDRESS = ethers.constants.AddressZero;
  const DEFAULT_ADMIN_ROLE =
    "0x0000000000000000000000000000000000000000000000000000000000000000";

  const MINTER_ROLE_STRING = ethers.utils.toUtf8Bytes("MINTER_ROLE");
  const MINTER_ROLE = ethers.utils.keccak256(MINTER_ROLE_STRING);

  beforeEach(async function () {
    accounts = await ethers.getSigners();

    marketplaceFeeAccount = accounts[0];

    minter = accounts[1];

    const TokenshopNFT = await ethers.getContractFactory("TokenshopNFT");
    erc721 = await TokenshopNFT.deploy(
      NAME,
      SYMBOL,
      BASE_URL,
      marketplaceFeeAccount.address
    );
  });

  describe("Check token Info", () => {
    it("should return the token name", async () => {
      expect(await erc721.name()).to.be.eq(NAME);
    });

    it("should return the token symboo", async () => {
      expect(await erc721.symbol()).to.be.eq(SYMBOL);
    });

    it("roles", async () => {
      const res = await erc721.hasRole(DEFAULT_ADMIN_ROLE, accounts[0].address);

      expect(res).to.be.eq(true);
    });
  });

  describe("deploy contracts, grant roles, mint and test:", () => {
    beforeEach(async () => {
      await erc721.grantRole(MINTER_ROLE, minter.address);
      // minting first token, id 0
      await erc721.connect(minter).mint(TOKEN_URI, minter.address, 0);

      await erc721.setBaseURI("");
    });

    it("roles", async () => {
      expect(await erc721.hasRole(MINTER_ROLE, minter.address)).to.be.eq(true);
    });

    it("total supply", async () => {
      expect(await erc721.totalSupply()).to.be.eq(1);
    });

    it("BASE + TOKEN URI", async () => {
      const tokenURI = await erc721.tokenURI(0);
      expect(tokenURI).to.be.equal(TOKEN_URI);
    });

    it("owner", async () => {
      expect(await erc721.ownerOf(0)).to.be.equal(minter.address);
    });

    it("balance", async () => {
      expect(await erc721.balanceOf(minter.address)).to.be.equal(1);
    });

    it("Transfer event", async function () {
      await expect(erc721.connect(minter).mint(TOKEN_URI, minter.address, 0))
        .to.emit(erc721, "Transfer")
        .withArgs(ZERO_ADDRESS, minter.address, 1);
    });

    it("non minter cannot mint", async () => {
      const nonMinter = accounts[2];
      await expect(
        erc721.connect(nonMinter).mint(TOKEN_URI, nonMinter.address, 0)
      ).to.be.reverted;
    });
  });

  /****************************/
  // STATE CHECKS
  /****************************/

  // test case 1
  describe("deploy contract, getStateInfo", () => {
    let marketplaceFeeWallet: string,
      isSecondarySale: boolean,
      artistFee: number,
      primaryPlatformBPs: number,
      secondaryPlatformBPs: number;
    beforeEach(async () => {
      ({
        marketplaceFeeWallet,
        isSecondarySale,
        artistFee,
        primaryPlatformBPs,
        secondaryPlatformBPs,
      } = await erc721.getStateInfo(1));
    });
    it("should return correct feeAccount", async () => {
      expect(marketplaceFeeWallet).to.eq(marketplaceFeeAccount.address);
    });

    it("secondary sale should be fasle", async () => {
      expect(isSecondarySale).to.eq(false);
    });

    it("should return artistFee", () => {
      expect(artistFee).to.eq(0);
    });

    it("should return primary Platform BPs", () => {
      expect(primaryPlatformBPs).to.eq(PRIMARY_PLATFORM_FEE);
    });
    it("should return secondary Platform BPs", () => {
      expect(secondaryPlatformBPs).to.eq(SECONDARY_PLATFORM_FEE);
    });
  });
  // test case 2
  describe("deploy contract, update fee account", () => {
    it("should not allow non owner to update fee account", async () => {
      await expect(
        erc721.connect(accounts[4]).setFeeAccount(accounts[1].address)
      ).to.be.reverted;
    });
    it("should allow owner to update fee account", async () => {
      const newFeeAccount = accounts[1];
      await erc721.setFeeAccount(newFeeAccount.address);

      const { marketplaceFeeWallet } = await erc721.getStateInfo(1);
      expect(marketplaceFeeWallet).to.eq(newFeeAccount.address);
    });
  });

  // test case 3
  describe("deploy contract, update Platform BPs", () => {
    const newFee = 1500;

    it("should not allow non owner to update Primary Platform BPs", async () => {
      await expect(
        erc721.connect(accounts[4]).setPrimaryPlatformBPs(newFee)
      ).to.be.revertedWith("is missing role");
    });

    it("should allow owner to update Primary Platform BPs ", async () => {
      await erc721.setPrimaryPlatformBPs(newFee);

      const { primaryPlatformBPs } = await erc721.getStateInfo(1);
      expect(primaryPlatformBPs).to.eq(newFee);
    });

    it("should not allow non owner to update Secondary Platform BPs", async () => {
      await expect(
        erc721.connect(accounts[4]).setSecondaryPlatformBPs(newFee)
      ).to.be.revertedWith("is missing role");
    });

    it("should allow owner to update Secondary Platform BPs ", async () => {
      await erc721.setSecondaryPlatformBPs(newFee);

      const { secondaryPlatformBPs } = await erc721.getStateInfo(1);
      expect(secondaryPlatformBPs).to.eq(newFee);
    });
  });

  // test case 6
  describe("deploy contract, mint NFT, getStateInfo", () => {
    let marketplaceFeeWallet: string,
      isSecondarySale: boolean,
      artistFee: number,
      primaryPlatformBPs: number,
      secondaryPlatformBPs: number;
    const artistRoyalites = 1000;
    beforeEach(async () => {
      await erc721.grantRole(MINTER_ROLE, minter.address);

      const tx = await erc721
        .connect(minter)
        .mint(TOKEN_URI, minter.address, artistRoyalites);

      const receipt = await tx.wait();
      // @ts-ignore
      const tokenId = parseInt(receipt.events[0].topics[3]);
      ({
        marketplaceFeeWallet,
        isSecondarySale,
        artistFee,
        primaryPlatformBPs,
        secondaryPlatformBPs,
      } = await erc721.getStateInfo(tokenId));
    });
    it("should return correct feeAccount", async () => {
      expect(marketplaceFeeWallet).to.eq(marketplaceFeeAccount.address);
    });

    it("secondary sale should be fasle", async () => {
      expect(isSecondarySale).to.eq(false);
    });

    it("should return artistFee", () => {
      expect(artistFee).to.eq(artistRoyalites);
    });

    it("should primary Platform BPs", () => {
      expect(primaryPlatformBPs).to.eq(PRIMARY_PLATFORM_FEE);
    });
    it("should secondary Platform BPs ", () => {
      expect(secondaryPlatformBPs).to.eq(SECONDARY_PLATFORM_FEE);
    });
  });

  // test case 7
  describe("deploy contract, mint NFT, getStateInfo", () => {
    let artistFee: number, tokenId: number;
    const newRoyalitesFee = 1000;
    const defaultFee = 500;

    beforeEach(async () => {
      await erc721.grantRole(MINTER_ROLE, minter.address);

      const tx = await erc721
        .connect(minter)
        .mint(TOKEN_URI, minter.address, 0);

      const receipt = await tx.wait();
      // @ts-ignore
      tokenId = parseInt(receipt.events[0].topics[3]);
      ({ artistFee } = await erc721.getStateInfo(tokenId));
    });

    describe("success ", () => {
      it("should return  default artist fee", () => {
        expect(artistFee).to.eq(defaultFee);
      });

      it("should update the royalties fee", async () => {
        const tx = await erc721
          .connect(minter)
          .modifyTokenRoyalities(tokenId, newRoyalitesFee);

        await tx.wait();

        ({ artistFee } = await erc721.getStateInfo(tokenId));

        expect(artistFee).to.eq(newRoyalitesFee);
      });
    });

    describe("failure ", () => {
      it("should not allow to update royalties other than creator", async () => {
        await expect(
          erc721
            .connect(accounts[5])
            .modifyTokenRoyalities(tokenId, newRoyalitesFee)
        ).to.reverted;
      });
    });
  });

  // test case 8
  describe("deploy contract, test supports interfaces", () => {
    // the interface id can be foud on the eip page https://eips.ethereum.org/EIPS/eip-721
    it("supports the IERC721 interface", async () => {
      expect(await erc721.supportsInterface("0x80ac58cd")).to.be.equal(true);
    });

    it("supports the IERC721Metadata interface", async () => {
      expect(await erc721.supportsInterface("0x5b5e139f")).to.be.equal(true);
    });

    it("supports the IERC165 interface", async () => {
      expect(await erc721.supportsInterface("0x01ffc9a7")).to.be.equal(true);
    });

    it("supports the IERC2981 interface", async () => {
      expect(await erc721.supportsInterface("0x2a55205a")).to.be.equal(true);
    });

    it("supports the IERC721Enumerable interface", async () => {
      expect(await erc721.supportsInterface("0x780e9d63")).to.be.equal(true);
    });

    it("supports the IAccessControl interface", async () => {
      expect(await erc721.supportsInterface("0x7965db0b")).to.be.equal(true);
    });
  });
});
