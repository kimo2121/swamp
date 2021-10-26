import Discount from "./components/discount/Discount";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Social from "./components/social/Social";
import { useState } from "react";
import React, { FC, useMemo } from "react";
import {
  WalletProvider,
  ConnectionProvider,
} from "@solana/wallet-adapter-react";
import {
  getLedgerWallet,
  getMathWallet,
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolongWallet,
  getTorusWallet,
} from "@solana/wallet-adapter-wallets";
import {
  WalletDialogProvider,
  WalletDisconnectButton,
} from "@solana/wallet-adapter-material-ui";

import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

export const treasury = new anchor.web3.PublicKey(
  process.env.REACT_APP_TREASURY_ADDRESS!
);

export const config = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_CONFIG!
);

export const candyMachineId = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID!
);

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
export const connection = new anchor.web3.Connection(rpcHost);

export const startDateSeed = parseInt(
  process.env.REACT_APP_CANDY_START_DATE!,
  10
);

export const txTimeout = 30000; // milliseconds (confirm this works for your project)

function App() {
  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getTorusWallet({
        options: {
          clientId:
            "BOM5Cl7PXgE9Ylq1Z1tqzhpydY0RVr8k90QQ85N7AKI5QGSrr9iDC-3rvmy0K_hF0JfpLMiXoDhta68JwcxS1LQ",
        },
      }),
      getLedgerWallet(),
      getSolongWallet(),
      getMathWallet(),
      getSolletWallet(),
    ],
    []
  );
  const [messageOpen, setMessageOpen] = useState(false);
  return (
    <>
      {/* <Message messageOpen = {messageOpen} setMessageOpen = {setMessageOpen}/> */}
      <ConnectionProvider endpoint={clusterApiUrl("devnet")}>
        <WalletProvider wallets={wallets}>
          <WalletDialogProvider>
            <div className="app">
              <div className="section">
                <Home />
                <Social />
                <Footer />
              </div>
            </div>
          </WalletDialogProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
}

export default App;
