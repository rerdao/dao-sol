import { FC, useEffect, useState } from "react";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import type { NextPage } from "next";
import Layout from "../components/Layout";
import AddProposalContainer from "../Container/AddProposalContainer";

const AddProposal: NextPage = (props) => {
  return (
    <Layout>
      <AddProposalContainer />
    </Layout>
  );
};

export default AddProposal;
