import { ethers } from "hardhat";

async function main() {
  const ElonNFT = await ethers.getContractFactory("ElonNFT");
  const elon = await ElonNFT.deploy();

  await elon.deployed();

  console.log("ElonNFT deployed to:", elon.address);

  let txn = await elon.mintNFT();
  await txn.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
