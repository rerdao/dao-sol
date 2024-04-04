import { FC, useEffect, useState } from "react";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import type { NextPage } from "next";
import Layout from "../components/Layout";
import ProposalContainer from "../Container/ProposalContainer";

const Proposal: NextPage = (props) => {
  return (
    <Layout>
      <ProposalContainer />
    </Layout>
  );
};

export default Proposal;
