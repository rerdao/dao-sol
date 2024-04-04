import { FC, useEffect, useState } from "react";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import type { NextPage } from "next";
import Head from "next/head";
import { useProgram } from "../utils/useProgram";
import { useRouter } from "next/router"

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


const Examples: NextPage = (props) => {
  const wallet = useAnchorWallet();
  const { connection } = useConnection();
  const { program } = useProgram({ connection, wallet });

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
    <>
      <Head>
        <title>solana_dao</title>
        <meta name="description" content="solana_dao" />
      </Head>

      <div className="text-white flex flex-col text-2xl m-5 p-2 border border-gray-600">
      for  initialize
      </div>
      <div className="text-white flex flex-col text-2xl m-5 p-2 border border-gray-600">
      for  addFeatures
      <div className="text-white flex flex-row text-base p-2">
      content
      <input
      type="text"
      className="bg-gray-600"
      value={
        content_for_addFeatures
      }
      onChange={
        contenthandler_for_addFeatures
      }
      />
      </div>
      <div className="text-white flex flex-row text-base p-2">
      companyIdx
      <input
      type="text"
      className="bg-gray-600"
      value={
        companyIdx_for_addFeatures
      }
      onChange={
        companyIdxhandler_for_addFeatures
      }
      />
      </div>
      <div className="text-white flex flex-row text-base p-2">
      votePeriod
      <input
      type="text"
      className="bg-gray-600"
      value={
        votePeriod_for_addFeatures
      }
      onChange={
        votePeriodhandler_for_addFeatures
      }
      />
      </div>
      </div>
      <div className="text-white flex flex-col text-2xl m-5 p-2 border border-gray-600">
      for  addVoting
      <div className="text-white flex flex-row text-base p-2">
      featureIdx
      <input
      type="text"
      className="bg-gray-600"
      value={
        featureIdx_for_addVoting
      }
      onChange={
        featureIdxhandler_for_addVoting
      }
      />
      </div>
      <div className="text-white flex flex-row text-base p-2">
      companyIdx
      <input
      type="text"
      className="bg-gray-600"
      value={
        companyIdx_for_addVoting
      }
      onChange={
        companyIdxhandler_for_addVoting
      }
      />
      </div>
      <div className="text-white flex flex-row text-base p-2">
      vote
      <input
      type="text"
      className="bg-gray-600"
      value={
        vote_for_addVoting
      }
      onChange={
        votehandler_for_addVoting
      }
      />
      </div>
      </div>
      <div className="text-white flex flex-col text-2xl m-5 p-2 border border-gray-600">
      for  addCompany
      <div className="text-white flex flex-row text-base p-2">
      companyName
      <input
      type="text"
      className="bg-gray-600"
      value={
        companyName_for_addCompany
      }
      onChange={
        companyNamehandler_for_addCompany
      }
      />
      </div>
      <div className="text-white flex flex-row text-base p-2">
      about
      <input
      type="text"
      className="bg-gray-600"
      value={
        about_for_addCompany
      }
      onChange={
        abouthandler_for_addCompany
      }
      />
      </div>
      </div>
      <div className="text-white flex flex-col text-2xl m-5 p-2 border border-gray-600">
      for  addMember
      <div className="text-white flex flex-row text-base p-2">
      companyIdx
      <input
      type="text"
      className="bg-gray-600"
      value={
        companyIdx_for_addMember
      }
      onChange={
        companyIdxhandler_for_addMember
      }
      />
      </div>
      </div>

      // buttons for calling instructions
      <button
        className="bg-green-600 text-white p-2 m-2"
        onClick={
          ()=>initialize(program ,   authority  , userProfile_for_initialize   ,   systemProgram ,)
        }
      >
        Call_initialize_functions
      </button>
      <button
        className="bg-green-600 text-white p-2 m-2"
        onClick={
          ()=>addFeatures(program , content_for_addFeatures , companyIdx_for_addFeatures , votePeriod_for_addFeatures ,   authority  , userProfile_for_addFeatures   , featureList_for_addFeatures   ,   systemProgram ,)
        }
      >
        Call_addFeatures_functions
      </button>
      <button
        className="bg-green-600 text-white p-2 m-2"
        onClick={
          ()=>addVoting(program , featureIdx_for_addVoting , companyIdx_for_addVoting , vote_for_addVoting ,   authority  , votingList_for_addVoting   ,   systemProgram ,)
        }
      >
        Call_addVoting_functions
      </button>
      <button
        className="bg-green-600 text-white p-2 m-2"
        onClick={
          ()=>addCompany(program , companyName_for_addCompany , about_for_addCompany ,   authority  , companyList_for_addCompany   ,   systemProgram ,)
        }
      >
        Call_addCompany_functions
      </button>
      <button
        className="bg-green-600 text-white p-2 m-2"
        onClick={
          ()=>addMember(program , companyIdx_for_addMember ,   authority  , memberList_for_addMember   ,   systemProgram ,)
        }
      >
        Call_addMember_functions
      </button>
    </>
  );
};

export default Examples;
