const { ethers } = require("hardhat");

async function main() {
  // ContractFactory in ethers.js is an abstraction used to deploy new smart contracts
  const whitelistContract = await ethers.getContractFactory("Whitelist");

  // here we deploy the contract
  // deploy() takes the constructor arguments and deploys the contract
  const deployedWhitelistContract = await whitelistContract.deploy(10);
  // 10 is the Maximum number of whitelisted addresses allowed

  // Wait for it to finish deploying
  await deployedWhitelistContract.deployed();

  // print the address of the deployed contract in the console
  console.log("Whitelist Contract Address:", deployedWhitelistContract.address);
}

// Call the main function and catch if there is any error
// Here, 0 means end the process without any kind of failure,
// and 1 means end the process with some failure.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
