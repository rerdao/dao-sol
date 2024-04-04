import React from "react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ConnectionProvider } from "@solana/wallet-adapter-react";

import "../styles/globals.css";
import "../styles/daolist.css";

//const endpoint = 'http://127.0.0.1:8899'
const endpoint = 'https://api.devnet.solana.com'

const WalletProvider = dynamic(
  () => import("../contexts/ClientWalletProvider"),
  {
    ssr: false,
  }
);



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider>
        <Component {...pageProps} />
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default MyApp;
