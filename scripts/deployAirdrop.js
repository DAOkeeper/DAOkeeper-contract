const path = require("path");
const { utils } = require("ethers");
const { addresses } = require('../rpc/utils/deployInfo');


async function main() {

  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

// Airdrop Contract
const AirdropContract = await ethers.getContractFactory("VestingAirDrop");

const TOKEN_ADDRESS = addresses.DAOkeeperToken;


AIRDROP_SNAPSHOT_TIMESTAMPS = [
    Math.round(new Date().setMonth(new Date().getMonth() - 3) / 1000),
    Math.round(new Date().setMonth(new Date().getMonth() - 2) / 1000),
    Math.round(new Date().setMonth(new Date().getMonth() - 1) / 1000),
];  // 과거 날짜 데이터
ROUND_DURATION_IN_DAYS = 7000; // TODO: 현실적인 기준으로 변경
NUM_OF_TOTAL_ROUNDS = 5;
AIRDROP_TARGET_ADDRESSES = [
  "0xd6D297C646064A9f17FB028560cfEfA345281c65",  // Alice
  "0xb810dC3BBe06f44176491D530B08155F8Cd4ee04",  // Bob
  "0xCD0eD7a514Ef9C2bf5205d7aD1bb33a6c5D5C89e"  // Charlie
];

AIRDROP_AMOUNTS_PER_ROUND_BY_ADDRESS = [utils.parseEther("30"), utils.parseEther("50"), utils.parseEther("70")];
TOTAL_AIRDROP_VOLUME_PER_ROUND = utils.parseEther("150");

console.log("input data >>>> Airdrop timestamps: ", AIRDROP_SNAPSHOT_TIMESTAMPS);

const Airdrop = await AirdropContract.deploy(
    TOKEN_ADDRESS,
    AIRDROP_SNAPSHOT_TIMESTAMPS,
    ROUND_DURATION_IN_DAYS,
    NUM_OF_TOTAL_ROUNDS,
    AIRDROP_TARGET_ADDRESSES,
    AIRDROP_AMOUNTS_PER_ROUND_BY_ADDRESS,
    TOTAL_AIRDROP_VOLUME_PER_ROUND
);

console.log('>>> Deployment in progress...')
await Airdrop.deployed();

  console.log("Deployed airdrop address:", Airdrop.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
