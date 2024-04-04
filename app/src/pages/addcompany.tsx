import { FC, useEffect, useState } from "react";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import type { NextPage } from "next";
import Layout from "../components/Layout";
import AddCompanyContainer from "../Container/AddCompanyContainer";


const AddCompany: NextPage = (props) => {
    return (
        <Layout>
            <AddCompanyContainer/>
        </Layout>
    )
}

export default AddCompany;