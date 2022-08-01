// import "./App.css";

import { useState } from "react";
import Punks from "./Punks.json";

import { ethers } from "ethers";

const addr = "0xD19c75E1681B6eDac6a71c97b4C6C7728C51E2c0";

function App() {
  const [account, setAccount] = useState(null);
  return (
    <div className="App">
      {!account && (
        <button
          onClick={async () => {
            if (window.ethereum) {
              const a = await window.ethereum.request({
                method: "eth_requestAccounts",
              });

              setAccount(a[0]);
            }
          }}
        >
          Connect
        </button>
      )}

      <p>your account {account}</p>
      <p>Mint your punk</p>

      <div>
        <button
          onClick={async () => {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            const contract = new ethers.Contract(addr, Punks.abi, signer);
            console.log(contract);

            try {
              const t = contract.mint();

              alert("susses!");
            } catch (error) {
              console.log(error);
            }
          }}
        >
          Mint
        </button>
      </div>
    </div>
  );
}

export default App;
