import { FC, useContext, useEffect, useState } from "react";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import type { NextPage } from "next";
import { useProgram } from "../utils/useProgram";
import Layout, { LayoutContext } from "../components/Layout";
import CompanyCard from "../components/CompanyCard";
import SearchBar from "../components/SearchBar";
import {
  initialize
} from '../utils/callInstructions'
import {
  addFeatures
} from '../utils/callInstructions'
import {
  addVoting
} from '../utils/callInstructions'
import {
  addCompany
} from '../utils/callInstructions'
import {
  addMember
} from '../utils/callInstructions'
import HomeContainer from "../Container/HomeContainer";


const Home: NextPage = (props) => {
  const { SystemProgram } = anchor.web3;



// React UseStates hooks for managing args 
//for initialize
//for addFeatures
const [content_for_addFeatures , setcontent_for_addFeatures] = useState()
const [companyIdx_for_addFeatures , setcompanyIdx_for_addFeatures] = useState()
const [votePeriod_for_addFeatures , setvotePeriod_for_addFeatures] = useState()
//for addVoting
const [featureIdx_for_addVoting , setfeatureIdx_for_addVoting] = useState()
const [companyIdx_for_addVoting , setcompanyIdx_for_addVoting] = useState()
const [vote_for_addVoting , setvote_for_addVoting] = useState()
//for addCompany
const [companyName_for_addCompany , setcompanyName_for_addCompany] = useState()
const [about_for_addCompany , setabout_for_addCompany] = useState()
//for addMember
const [companyIdx_for_addMember , setcompanyIdx_for_addMember] = useState()

//handler functions for inputs feilds
const contenthandler_for_addFeatures = (e) => {
  setcontent_for_addFeatures(e.target.value)
}
const companyIdxhandler_for_addFeatures = (e) => {
  setcompanyIdx_for_addFeatures(e.target.value)
}
const votePeriodhandler_for_addFeatures = (e) => {
  setvotePeriod_for_addFeatures(e.target.value)
}
const featureIdxhandler_for_addVoting = (e) => {
  setfeatureIdx_for_addVoting(e.target.value)
}
const companyIdxhandler_for_addVoting = (e) => {
  setcompanyIdx_for_addVoting(e.target.value)
}
const votehandler_for_addVoting = (e) => {
  setvote_for_addVoting(e.target.value)
}
const companyNamehandler_for_addCompany = (e) => {
  setcompanyName_for_addCompany(e.target.value)
}
const abouthandler_for_addCompany = (e) => {
  setabout_for_addCompany(e.target.value)
}
const companyIdxhandler_for_addMember = (e) => {
  setcompanyIdx_for_addMember(e.target.value)
}

// variables for accounts
const authority = ""
const systemProgram = ""
const clock = ""

const userProfile_for_initialize = ""
const userProfile_for_addFeatures = ""
const featureList_for_addFeatures = ""
const votingList_for_addVoting = ""
const companyList_for_addCompany = ""
  const memberList_for_addMember = ""
  



  return (
    <Layout>
          <div id="content" className="pb-6 pt-4">
            <SearchBar />
            <HomeContainer />
          </div>
    </Layout>
  );
};

export default Home;
