// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.

const path = require("path");


async function main() {
  // This is just a convenience check
  // if (network.name === "hardhat") {
  //   console.warn(
  //     "You are trying to deploy a contract to the Hardhat Network, which" +
  //       "gets automatically created and destroyed every time. Use the Hardhat" +
  //       " option '--network localhost'"
  //   );
  // }

  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  // Token Contract
  const TokenContract = await ethers.getContractFactory("DAOkeeperToken");
  
  // Token instance
  const Token = await TokenContract.deploy(
      "DAOkeeperToken",  // token name
      "KEEP",  // token symbol
      "keepersDAO",  // DAO name
      "DAO for keeping DAOkeeper project.",  // DAO intro
      "https://ipfs.io/ipfs/bafybeie4lxug2vxod3clrb3krv5e2bbrmpexjgdzdfqkewbkc5egol3nmu/ef_image_white.png",  // DAO image
      "some_website_link",  // DAO website url
      1500,  // initial supply; DECIMAL == 18
    );
  console.log('>>> Deployment in progress...')
  await Token.deployed();

  console.log("Deployed Token address:", Token.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
