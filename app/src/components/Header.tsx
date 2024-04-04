import React, { useContext } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { initialize } from '../utils/callInstructions';
import * as anchor from "@coral-xyz/anchor";
import { LayoutContext } from "./Layout";
import Link from "next/link";
import CustomButton from "./Button";




const Header = () => {
    let { wallet, connection, program } = useContext(LayoutContext);
    const { SystemProgram } = anchor.web3;
      const userAccount = anchor.web3.Keypair.generate();
    

    return (
      <nav className="flex justify-end items-center px-16 py-4 bg-black">
        <Link href={""}>
          <a href="" style={{ color: "white", padding: "10px" }}>
            DAO
          </a>
        </Link>

        <Link href={"/"}>
          <a href="" style={{ color: "white", padding: "10px" }}>
            Home
          </a>
        </Link>
        <Link href={"/addcompany"}>
          <a href="/addcompany" style={{ color: "white", padding: "10px" }}>
            Add Company
          </a>
        </Link>
        <Link href={"/proposals"}>
          <a href="/proposals" style={{ color: "white", padding: "10px" }}>
            Proposals
          </a>
        </Link>

        <CustomButton
          style={{
            backgroundColor: "#4e44ce",
            marginLeft: "10px",
            marginRight: "10px",
            borderRadius: "10px"
          }}
          onClick={() =>
            initialize(
              program,
              wallet.publicKey,
              userAccount.publicKey,
              SystemProgram.programId
            )
          }
          value="Initiatlize"
        />
        <WalletMultiButton />
      </nav>
    );
}

export default Header;