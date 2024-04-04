import { FC, useEffect, useState } from "react";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import type { NextPage } from "next";
import Layout from "../components/Layout";
import AddCompanyContainer from "../Container/AddCompanyContainer";


const Sidebar = () => {
    return (
        <div id="sidebar-left" className="float-left w-full lg:w-1/4">
            <div className="border-y border-skin-border bg-skin-block-bg text-base md:rounded-xl md:border overflow-hidden !border-t-0 md:!border-t">
                <div className="leading-5 sm:leading-6">
                    <div className="lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto">
                        <div className="no-scrollbar mt-0 flex overflow-y-auto md:mt-4 lg:my-3 lg:block">
                            <a tabIndex={0}>
                                <div data-v-6801bdb8="" className="group relative block cursor-pointer whitespace-nowrap px-[20px] py-2 text-skin-text  hover:bg-skin-bg lg:px-3 !text-skin-heading">
                                    General
                                    <div data-v-6801bdb8="" className="absolute left-0 top-0 flex h-full w-full justify-center">
                                        <div data-v-6801bdb8="" className="lg:nav-left-border max-lg:nav-bottom-border lg:group-hover:nav-left-border-hovered selected"></div>
                                    </div>
                                </div>
                            </a>
                            <a tabIndex={0}>
                                <div data-v-6801bdb8="" className="group relative block cursor-pointer whitespace-nowrap px-[20px] py-2 text-skin-text  hover:bg-skin-bg lg:px-3">
                                    Strategies
                                    <div data-v-6801bdb8="" className="absolute left-0 top-0 flex h-full w-full justify-center">
                                        <div data-v-6801bdb8="" className="lg:nav-left-border max-lg:nav-bottom-border lg:group-hover:nav-left-border-hovered"></div>
                                    </div>
                                </div>
                            </a>
                            <a tabIndex={0}>
                                <div data-v-6801bdb8="" className="group relative block cursor-pointer whitespace-nowrap px-[20px] py-2 text-skin-text  hover:bg-skin-bg lg:px-3">
                                    Proposal
                                    <div data-v-6801bdb8="" className="absolute left-0 top-0 flex h-full w-full justify-center">
                                        <div data-v-6801bdb8="" className="lg:nav-left-border max-lg:nav-bottom-border lg:group-hover:nav-left-border-hovered"></div>
                                    </div>
                                </div>
                            </a>
                            <a tabIndex={0}>
                                <div data-v-6801bdb8="" className="group relative block cursor-pointer whitespace-nowrap px-[20px] py-2 text-skin-text  hover:bg-skin-bg lg:px-3">
                                    Voting
                                    <div data-v-6801bdb8="" className="absolute left-0 top-0 flex h-full w-full justify-center">
                                        <div data-v-6801bdb8="" className="lg:nav-left-border max-lg:nav-bottom-border lg:group-hover:nav-left-border-hovered"></div>
                                    </div>
                                </div>
                            </a>
                            <a tabIndex={0}>
                                <div data-v-6801bdb8="" className="group relative block cursor-pointer whitespace-nowrap px-[20px] py-2 text-skin-text  hover:bg-skin-bg lg:px-3">
                                    Delegation
                                    <div data-v-6801bdb8="" className="absolute left-0 top-0 flex h-full w-full justify-center">
                                        <div data-v-6801bdb8="" className="lg:nav-left-border max-lg:nav-bottom-border lg:group-hover:nav-left-border-hovered"></div>
                                    </div>
                                </div>
                            </a>
                            <a tabIndex={0}>
                                <div data-v-6801bdb8="" className="group relative block cursor-pointer whitespace-nowrap px-[20px] py-2 text-skin-text  hover:bg-skin-bg lg:px-3">
                                    Members
                                    <div data-v-6801bdb8="" className="absolute left-0 top-0 flex h-full w-full justify-center">
                                        <div data-v-6801bdb8="" className="lg:nav-left-border max-lg:nav-bottom-border lg:group-hover:nav-left-border-hovered"></div>
                                    </div>
                                </div>
                            </a>
                            <a tabIndex={0}>
                                <div data-v-6801bdb8="" className="group relative block cursor-pointer whitespace-nowrap px-[20px] py-2 text-skin-text  hover:bg-skin-bg lg:px-3">
                                    Advanced
                                    <div data-v-6801bdb8="" className="absolute left-0 top-0 flex h-full w-full justify-center">
                                        <div data-v-6801bdb8="" className="lg:nav-left-border max-lg:nav-bottom-border lg:group-hover:nav-left-border-hovered"></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;


