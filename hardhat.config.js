require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    klaytn_testnet: {
      url: "https://public-node-api.klaytnapi.com/v1/baobab",
      accounts: [process.env.KLAYTN_PRIVATE_KEY],
    }
  }
};
