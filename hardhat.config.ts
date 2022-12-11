import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const {API_URL_KEY, PRIVATE_KEY} = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: API_URL_KEY,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};

export default config;
