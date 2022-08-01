import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";

import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: process.env.ENV_INFURA || "",
      accounts: [process.env.ENV_PRIV || ""],
    },
  },
  etherscan: {
    apiKey: process.env.ENV_SCAN,
  },
};

export default config;
