/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TokenshopMarketplace,
  TokenshopMarketplaceInterface,
} from "../TokenshopMarketplace";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenshopERC721",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "OfferRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "Offered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "Order",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "OrderRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "Traded",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "createOffer",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "createOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_offerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_orderId",
        type: "uint256",
      },
    ],
    name: "fillOffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_orderId",
        type: "uint256",
      },
    ],
    name: "fillOrder",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_tokenURI",
        type: "string",
      },
      {
        internalType: "uint24",
        name: "_artistFee",
        type: "uint24",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_offerId",
        type: "uint256",
      },
    ],
    name: "modifyOfferPrice",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_orderId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_updatedPrice",
        type: "uint256",
      },
    ],
    name: "modifyOrderPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "orders",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_offerId",
        type: "uint256",
      },
    ],
    name: "removeOffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_orderId",
        type: "uint256",
      },
    ],
    name: "removeOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002f6638038062002f668339818101604052810190620000379190620003cb565b60018081905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415620000b1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000a8906200045e565b60405180910390fd5b620000c66000801b336200016660201b60201c565b6200011e7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a660001b7f3d56c6b2572263081c65bd5409e23369bba6fe5164eaf66eb49349dcd212d6d360001b6200017c60201b60201c565b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000480565b620001788282620001df60201b60201c565b5050565b60006200018f83620002d060201b60201c565b905081600080858152602001908152602001600020600101819055508181847fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff60405160405180910390a4505050565b620001f18282620002ef60201b60201c565b620002cc57600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620002716200035960201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6000806000838152602001908152602001600020600101549050919050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003938262000366565b9050919050565b620003a58162000386565b8114620003b157600080fd5b50565b600081519050620003c5816200039a565b92915050565b600060208284031215620003e457620003e362000361565b5b6000620003f484828501620003b4565b91505092915050565b600082825260208201905092915050565b7f496e76616c696420616464726573730000000000000000000000000000000000600082015250565b600062000446600f83620003fd565b915062000453826200040e565b602082019050919050565b60006020820190508181036000830152620004798162000437565b9050919050565b612ad680620004906000396000f3fe6080604052600436106100fe5760003560e01c806391d1485411610095578063a269993d11610064578063a269993d14610320578063a85c38ef1461033c578063b6084d951461037b578063d547741f14610397578063d868d852146103c0576100fe565b806391d148541461026657806395a0f9c7146102a35780639645337a146102cc578063a217fddf146102f5576100fe565b80636248a916116100d15780636248a916146101cf57806367b830ad146101f857806378447e7f1461021457806379109baa1461023d576100fe565b806301ffc9a714610103578063248a9ca3146101405780632f2ff15d1461017d57806336568abe146101a6575b600080fd5b34801561010f57600080fd5b5061012a60048036038101906101259190611f50565b6103e9565b6040516101379190611f98565b60405180910390f35b34801561014c57600080fd5b5061016760048036038101906101629190611fe9565b610463565b6040516101749190612025565b60405180910390f35b34801561018957600080fd5b506101a4600480360381019061019f919061209e565b610482565b005b3480156101b257600080fd5b506101cd60048036038101906101c8919061209e565b6104a3565b005b3480156101db57600080fd5b506101f660048036038101906101f19190612114565b610526565b005b610212600480360381019061020d9190612154565b61061c565b005b34801561022057600080fd5b5061023b60048036038101906102369190612114565b61072a565b005b34801561024957600080fd5b50610264600480360381019061025f9190612114565b6108ec565b005b34801561027257600080fd5b5061028d6004803603810190610288919061209e565b610a99565b60405161029a9190611f98565b60405180910390f35b3480156102af57600080fd5b506102ca60048036038101906102c59190612154565b610b03565b005b3480156102d857600080fd5b506102f360048036038101906102ee9190612154565b610d71565b005b34801561030157600080fd5b5061030a610fa4565b6040516103179190612025565b60405180910390f35b61033a60048036038101906103359190612154565b610fab565b005b34801561034857600080fd5b50610363600480360381019061035e9190612154565b6110c6565b6040516103729392919061219f565b60405180910390f35b61039560048036038101906103909190612154565b611110565b005b3480156103a357600080fd5b506103be60048036038101906103b9919061209e565b6112db565b005b3480156103cc57600080fd5b506103e760048036038101906103e29190612357565b6112fc565b005b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061045c575061045b826113bf565b5b9050919050565b6000806000838152602001908152602001600020600101549050919050565b61048b82610463565b61049481611429565b61049e838361143d565b505050565b6104ab61151d565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610518576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050f90612436565b60405180910390fd5b6105228282611525565b5050565b813373ffffffffffffffffffffffffffffffffffffffff166005600083815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461059557600080fd5b600082116105a257600080fd5b60006005600085815260200190815260200160002090508281600101819055508060000154843373ffffffffffffffffffffffffffffffffffffffff167f7c1ffd06d2a1dfda35ac96481c894c45a1623c365a9060c5a038a45db4614e808660405161060e9190612456565b60405180910390a450505050565b60006005600083815260200190815260200160002060405180606001604052908160008201548152602001600182015481526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525050905080602001513410156106b957600080fd5b60006040518060a001604052808360000151815260200184815260200183602001518152602001836040015173ffffffffffffffffffffffffffffffffffffffff1681526020013373ffffffffffffffffffffffffffffffffffffffff16815250905061072581611606565b505050565b60006006600084815260200190815260200160002060405180606001604052908160008201548152602001600182015481526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505090506000821461082d573373ffffffffffffffffffffffffffffffffffffffff166005600084815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461082c57600080fd5b5b6006600084815260200190815260200160002060008082016000905560018201600090556002820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055505060006040518060a0016040528083600001518152602001848152602001836020015181526020013373ffffffffffffffffffffffffffffffffffffffff168152602001836040015173ffffffffffffffffffffffffffffffffffffffff1681525090506108e681611606565b50505050565b600081116108f957600080fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b815260040161095893929190612471565b600060405180830381600087803b15801561097257600080fd5b505af1158015610986573d6000803e3d6000fd5b505050506109946002611be7565b60006109a06002611bfd565b905060405180606001604052808481526020018381526020013373ffffffffffffffffffffffffffffffffffffffff1681525060056000838152602001908152602001600020600082015181600001556020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555090505082813373ffffffffffffffffffffffffffffffffffffffff167f7c1ffd06d2a1dfda35ac96481c894c45a1623c365a9060c5a038a45db4614e8085604051610a8c9190612456565b60405180910390a4505050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b803373ffffffffffffffffffffffffffffffffffffffff166006600083815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610b7257600080fd5b60026001541415610bb8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610baf906124f4565b60405180910390fd5b600260018190555060006006600084815260200190815260200160002060405180606001604052908160008201548152602001600182015481526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505090506006600084815260200190815260200160002060008082016000905560018201600090556002820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905550506000816040015173ffffffffffffffffffffffffffffffffffffffff168260200151604051610cc790612545565b60006040518083038185875af1925050503d8060008114610d04576040519150601f19603f3d011682016040523d82523d6000602084013e610d09565b606091505b5050905080610d1757600080fd5b816000015184836040015173ffffffffffffffffffffffffffffffffffffffff167f869a8f6ba55bc2d454fc3e2291d81738dd44ceb5503dc3c1df8071d45cc8e68b60405160405180910390a45050600180819055505050565b803373ffffffffffffffffffffffffffffffffffffffff166005600083815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610de057600080fd5b60006005600084815260200190815260200160002060405180606001604052908160008201548152602001600182015481526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250509050600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd30836040015184600001516040518463ffffffff1660e01b8152600401610ed393929190612471565b600060405180830381600087803b158015610eed57600080fd5b505af1158015610f01573d6000803e3d6000fd5b505050506005600084815260200190815260200160002060008082016000905560018201600090556002820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555050806000015183826040015173ffffffffffffffffffffffffffffffffffffffff167fd6a299bc1e8bed34430b109db9f16b0f9d75b8c9a36393225f6cd2b3aab54b7960405160405180910390a4505050565b6000801b81565b60003411610fb857600080fd5b610fc26003611be7565b6000610fce6003611bfd565b905060405180606001604052808381526020013481526020013373ffffffffffffffffffffffffffffffffffffffff1681525060066000838152602001908152602001600020600082015181600001556020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555090505081813373ffffffffffffffffffffffffffffffffffffffff167f955eacb38f545ae1806f0fe1f5ad14f9f52891c98cfafa47385f90148f2eed00346040516110ba9190612456565b60405180910390a45050565b60056020528060005260406000206000915090508060000154908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905083565b803373ffffffffffffffffffffffffffffffffffffffff166006600083815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461117f57600080fd5b600260015414156111c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111bc906124f4565b60405180910390fd5b6002600181905550600034116111da57600080fd5b600060066000848152602001908152602001600020905060008160010154905060003373ffffffffffffffffffffffffffffffffffffffff168260405161122090612545565b60006040518083038185875af1925050503d806000811461125d576040519150601f19603f3d011682016040523d82523d6000602084013e611262565b606091505b505090508061127057600080fd5b3483600101819055508260000154853373ffffffffffffffffffffffffffffffffffffffff167f955eacb38f545ae1806f0fe1f5ad14f9f52891c98cfafa47385f90148f2eed00346040516112c59190612456565b60405180910390a4505050600180819055505050565b6112e482610463565b6112ed81611429565b6112f78383611525565b505050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a660001b61132981611429565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663271589be8433856040518463ffffffff1660e01b8152600401611388939291906125e0565b600060405180830381600087803b1580156113a257600080fd5b505af11580156113b6573d6000803e3d6000fd5b50505050505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b61143a8161143561151d565b611c0b565b50565b6114478282610a99565b61151957600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506114be61151d565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600033905090565b61152f8282610a99565b1561160257600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506115a761151d565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b600081602001511461170157600560008260200151815260200190815260200160002060008082016000905560018201600090556002820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555050600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd30836080015184600001516040518463ffffffff1660e01b81526004016116ca93929190612471565b600060405180830381600087803b1580156116e457600080fd5b505af11580156116f8573d6000803e3d6000fd5b5050505061179f565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd8260600151836080015184600001516040518463ffffffff1660e01b815260040161176c93929190612471565b600060405180830381600087803b15801561178657600080fd5b505af115801561179a573d6000803e3d6000fd5b505050505b600080600080600080600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639094648788600001516040518263ffffffff1660e01b81526004016118079190612456565b60c06040518083038186803b15801561181f57600080fd5b505afa158015611833573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118579190612674565b9550955095509550955095506000876040015190506000806000886119b0576127108762ffffff168561188a9190612730565b61189491906127b9565b925082846118a291906127ea565b93508973ffffffffffffffffffffffffffffffffffffffff16836040516118c890612545565b60006040518083038185875af1925050503d8060008114611905576040519150601f19603f3d011682016040523d82523d6000602084013e61190a565b606091505b5050809150508061191a57600080fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635b1d0f4d8c600001516040518263ffffffff1660e01b81526004016119799190612456565b600060405180830381600087803b15801561199357600080fd5b505af11580156119a7573d6000803e3d6000fd5b50505050611af9565b6127108662ffffff16856119c49190612730565b6119ce91906127b9565b925082846119dc91906127ea565b93508973ffffffffffffffffffffffffffffffffffffffff1683604051611a0290612545565b60006040518083038185875af1925050503d8060008114611a3f576040519150601f19603f3d011682016040523d82523d6000602084013e611a44565b606091505b50508091505080611a5457600080fd5b6127108862ffffff1685611a689190612730565b611a7291906127b9565b91508184611a8091906127ea565b93508473ffffffffffffffffffffffffffffffffffffffff1682604051611aa690612545565b60006040518083038185875af1925050503d8060008114611ae3576040519150601f19603f3d011682016040523d82523d6000602084013e611ae8565b606091505b50508091505080611af857600080fd5b5b8a6060015173ffffffffffffffffffffffffffffffffffffffff1684604051611b2190612545565b60006040518083038185875af1925050503d8060008114611b5e576040519150601f19603f3d011682016040523d82523d6000602084013e611b63565b606091505b50508091505080611b7357600080fd5b8a600001518b6060015173ffffffffffffffffffffffffffffffffffffffff167f825f67dcf8bc9df74117166defc432f4cdf0a331eff757dd049327c83c2e02e18d608001518e602001518f60400151604051611bd29392919061281e565b60405180910390a35050505050505050505050565b6001816000016000828254019250508190555050565b600081600001549050919050565b611c158282610a99565b611ca457611c3a8173ffffffffffffffffffffffffffffffffffffffff166014611ca8565b611c488360001c6020611ca8565b604051602001611c59929190612929565b6040516020818303038152906040526040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c9b9190612963565b60405180910390fd5b5050565b606060006002836002611cbb9190612730565b611cc59190612985565b67ffffffffffffffff811115611cde57611cdd6121f1565b5b6040519080825280601f01601f191660200182016040528015611d105781602001600182028036833780820191505090505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110611d4857611d476129db565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110611dac57611dab6129db565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006001846002611dec9190612730565b611df69190612985565b90505b6001811115611e96577f3031323334353637383961626364656600000000000000000000000000000000600f861660108110611e3857611e376129db565b5b1a60f81b828281518110611e4f57611e4e6129db565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c945080611e8f90612a0a565b9050611df9565b5060008414611eda576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ed190612a80565b60405180910390fd5b8091505092915050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611f2d81611ef8565b8114611f3857600080fd5b50565b600081359050611f4a81611f24565b92915050565b600060208284031215611f6657611f65611eee565b5b6000611f7484828501611f3b565b91505092915050565b60008115159050919050565b611f9281611f7d565b82525050565b6000602082019050611fad6000830184611f89565b92915050565b6000819050919050565b611fc681611fb3565b8114611fd157600080fd5b50565b600081359050611fe381611fbd565b92915050565b600060208284031215611fff57611ffe611eee565b5b600061200d84828501611fd4565b91505092915050565b61201f81611fb3565b82525050565b600060208201905061203a6000830184612016565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061206b82612040565b9050919050565b61207b81612060565b811461208657600080fd5b50565b60008135905061209881612072565b92915050565b600080604083850312156120b5576120b4611eee565b5b60006120c385828601611fd4565b92505060206120d485828601612089565b9150509250929050565b6000819050919050565b6120f1816120de565b81146120fc57600080fd5b50565b60008135905061210e816120e8565b92915050565b6000806040838503121561212b5761212a611eee565b5b6000612139858286016120ff565b925050602061214a858286016120ff565b9150509250929050565b60006020828403121561216a57612169611eee565b5b6000612178848285016120ff565b91505092915050565b61218a816120de565b82525050565b61219981612060565b82525050565b60006060820190506121b46000830186612181565b6121c16020830185612181565b6121ce6040830184612190565b949350505050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b612229826121e0565b810181811067ffffffffffffffff82111715612248576122476121f1565b5b80604052505050565b600061225b611ee4565b90506122678282612220565b919050565b600067ffffffffffffffff821115612287576122866121f1565b5b612290826121e0565b9050602081019050919050565b82818337600083830152505050565b60006122bf6122ba8461226c565b612251565b9050828152602081018484840111156122db576122da6121db565b5b6122e684828561229d565b509392505050565b600082601f830112612303576123026121d6565b5b81356123138482602086016122ac565b91505092915050565b600062ffffff82169050919050565b6123348161231c565b811461233f57600080fd5b50565b6000813590506123518161232b565b92915050565b6000806040838503121561236e5761236d611eee565b5b600083013567ffffffffffffffff81111561238c5761238b611ef3565b5b612398858286016122ee565b92505060206123a985828601612342565b9150509250929050565b600082825260208201905092915050565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b6000612420602f836123b3565b915061242b826123c4565b604082019050919050565b6000602082019050818103600083015261244f81612413565b9050919050565b600060208201905061246b6000830184612181565b92915050565b60006060820190506124866000830186612190565b6124936020830185612190565b6124a06040830184612181565b949350505050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b60006124de601f836123b3565b91506124e9826124a8565b602082019050919050565b6000602082019050818103600083015261250d816124d1565b9050919050565b600081905092915050565b50565b600061252f600083612514565b915061253a8261251f565b600082019050919050565b600061255082612522565b9150819050919050565b600081519050919050565b60005b83811015612583578082015181840152602081019050612568565b83811115612592576000848401525b50505050565b60006125a38261255a565b6125ad81856123b3565b93506125bd818560208601612565565b6125c6816121e0565b840191505092915050565b6125da8161231c565b82525050565b600060608201905081810360008301526125fa8186612598565b90506126096020830185612190565b61261660408301846125d1565b949350505050565b60008151905061262d81612072565b92915050565b61263c81611f7d565b811461264757600080fd5b50565b60008151905061265981612633565b92915050565b60008151905061266e8161232b565b92915050565b60008060008060008060c0878903121561269157612690611eee565b5b600061269f89828a0161261e565b96505060206126b089828a0161264a565b95505060406126c189828a0161265f565b94505060606126d289828a0161265f565b93505060806126e389828a0161265f565b92505060a06126f489828a0161261e565b9150509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061273b826120de565b9150612746836120de565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561277f5761277e612701565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006127c4826120de565b91506127cf836120de565b9250826127df576127de61278a565b5b828204905092915050565b60006127f5826120de565b9150612800836120de565b92508282101561281357612812612701565b5b828203905092915050565b60006060820190506128336000830186612190565b6128406020830185612181565b61284d6040830184612181565b949350505050565b600081905092915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b6000612896601783612855565b91506128a182612860565b601782019050919050565b60006128b78261255a565b6128c18185612855565b93506128d1818560208601612565565b80840191505092915050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b6000612913601183612855565b915061291e826128dd565b601182019050919050565b600061293482612889565b915061294082856128ac565b915061294b82612906565b915061295782846128ac565b91508190509392505050565b6000602082019050818103600083015261297d8184612598565b905092915050565b6000612990826120de565b915061299b836120de565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156129d0576129cf612701565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000612a15826120de565b91506000821415612a2957612a28612701565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b6000612a6a6020836123b3565b9150612a7582612a34565b602082019050919050565b60006020820190508181036000830152612a9981612a5d565b905091905056fea26469706673582212200c9f893420e0872d036c824928b76a384c0fb26514f34dd763a451f2c0de390664736f6c63430008090033";

export class TokenshopMarketplace__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    tokenshopERC721: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TokenshopMarketplace> {
    return super.deploy(
      tokenshopERC721,
      overrides || {}
    ) as Promise<TokenshopMarketplace>;
  }
  getDeployTransaction(
    tokenshopERC721: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(tokenshopERC721, overrides || {});
  }
  attach(address: string): TokenshopMarketplace {
    return super.attach(address) as TokenshopMarketplace;
  }
  connect(signer: Signer): TokenshopMarketplace__factory {
    return super.connect(signer) as TokenshopMarketplace__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenshopMarketplaceInterface {
    return new utils.Interface(_abi) as TokenshopMarketplaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenshopMarketplace {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TokenshopMarketplace;
  }
}