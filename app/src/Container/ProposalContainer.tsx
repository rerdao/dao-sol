import React, { useContext } from "react";
import { LayoutContext } from "../components/Layout";
import CustomButton from "../components/Button";
import Link from "next/link";

const ProposalContainer = () => {
  let { wallet, connection, program } = useContext(LayoutContext);

  return (
    <div
      className="px-4 md:px-4 mx-auto max-w-[1012px] pt-8 pb-8 mb-8"
      style={{ color: "#8b949e" }}
    >
      <div className="relative float-right w-full pl-0 lg:w-3/4 lg:pl-5">
        <h1 className="hidden lg:mb-3 lg:block">Proposals</h1>
        <div className="mb-4 flex flex-col justify-between gap-x-3 gap-y-[10px] px-[20px] sm:flex-row md:px-0">
          <div className="w-full rounded-full border border-skin-border pl-3 pr-0 focus-within:!border-skin-text md:max-w-[340px]">
            <div className="flex">
              <div className="flex h-[44px] items-center flex-auto pr-2">
                <svg
                  viewBox="0 0 24 24"
                  width="1.2em"
                  height="1.2em"
                  className="mr-2 flex-shrink-0 text-[19px] text-skin-link"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m21 21l-6-6m2-5a7 7 0 1 1-14 0a7 7 0 0 1 14 0Z"
                  ></path>
                </svg>
                <input
                  placeholder="Search"
                  type="text"
                  className="input w-full border-none"
                />
              </div>
              <div className="flex h-[44px] items-center border-l">
                <div className="h-full" data-headlessui-state="">
                  <button
                    className="flex items-center rounded-full p-[6px] text-md text-skin-text transition-colors duration-200 hover:text-skin-link h-full w-[54px] justify-center outline-none"
                    id="headlessui-popover-button-31"
                    aria-expanded="false"
                    type="button"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="1.2em"
                      height="1.2em"
                      className="mr-1 text-base text-skin-link"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6V4m0 2a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m-6 8a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v2m0-6V4"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div
                  style={{
                    position: "fixed",
                    height: "0px",
                    padding: "0px",
                    overflow: "hidden",
                    clip: "rect(0px, 0px, 0px, 0px)",
                    whiteSpace: "nowrap",
                    borderWidth: "0px",
                    display: "none",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <Link href={'/addproposal'}>
            <a
              href="#"
              className="whitespace-nowrap"
              data-testid="create-proposal-button"
            >
              <button type="button" className="tune-button w-full sm:w-auto">
                {" "}
                New proposal{" "}
              </button>
            </a>
          </Link>
        </div>
        <div className="mb-3 space-y-3">
          <div className="border-y border-skin-border bg-skin-block-bg text-base md:rounded-xl md:border transition-colors">
            <div className="leading-5 sm:leading-6">
              <div>
                <div className="block p-3 text-skin-text sm:p-4">
                  <div>
                    <div className="flex h-[26px] items-start justify-between">
                      <div className="flex items-center gap-1">
                        <div data-headlessui-state="">
                          <button
                            id="headlessui-popover-button-36"
                            type="button"
                            aria-expanded="false"
                            data-headlessui-state=""
                          >
                            <a
                              href="#/profile/0xECC2a9240268BC7a26386ecB49E1Befca2706AC9"
                              className="whitespace-nowrap"
                              tabIndex={-1}
                            >
                              <div className="flex flex-nowrap items-center space-x-1">
                                <div>
                                  <img
                                    className="rounded-full bg-skin-border object-cover"
                                    alt="avatar"
                                    style={{
                                      width: "20px",
                                      height: "20px",
                                      minWidth: "20px",
                                      display: "none",
                                    }}
                                  />
                                  <img
                                    src="https://cdn.stamp.fyi/avatar/eth:0xECC2a9240268BC7a26386ecB49E1Befca2706AC9?s=40"
                                    className="rounded-full bg-skin-border object-cover"
                                    alt="avatar"
                                    style={{
                                      width: "20px",
                                      height: "20px",
                                      minWidth: "20px",
                                    }}
                                  />
                                </div>
                                <span className="w-full cursor-pointer truncate text-skin-link">
                                  stablelab.eth
                                </span>
                              </div>
                            </a>
                          </button>
                        </div>
                        <div
                          style={{
                            position: "fixed",
                            height: "0px",
                            padding: "0px",
                            overflow: "hidden",
                            clip: "rect(0px, 0px, 0px, 0px)",
                            whiteSpace: "nowrap",
                            borderWidth: "0px",
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div className="text-white rounded-full px-[12px] text-sm h-[24px] w-fit leading-[23px] bg-green">
                        Active
                      </div>
                    </div>
                    <a
                      href="#/uniswapgovernance.eth/proposal/0xe2fa09de5e3ff44b57c40b2fe049f43e47cb8e3b192bd1dc52ef3b42d8b5c363"
                      className="cursor-pointer"
                    >
                      <div className="relative mb-1 mt-3 break-words pr-[80px] leading-[32px]">
                        <h3 className="inline pr-2">
                          Uniswap Deployments Accountability Committee
                          Competition{" "}
                        </h3>
                      </div>
                      <p className="line-clamp-2 break-words text-md font-semibold">
                        The details can be found here:
                        https://gov.uniswap.org/t/uniswap-deployments-accountability
                        -committee-next-steps-the-committee-application-thread/22475?u=doo_stablelab
                        Next Committee Member Selection Process and the
                        DurationApplicants Above would be the new ratios upon
                        lowering the PT to 1M
                      </p>
                      <div className="">
                        <div className="relative mt-1 w-full">
                          <div className="absolute ml-3 flex items-center leading-[43px] text-skin-link">
                            <svg
                              viewBox="0 0 24 24"
                              width="1.2em"
                              height="1.2em"
                              className="-ml-1 mr-2 text-sm"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m5 13l4 4L19 7"
                              ></path>
                            </svg>{" "}
                            Lower PT from 2.5M UNI to 1M UNI
                            <span className="ml-1 text-skin-text">21M UNI</span>
                          </div>
                          <div className="absolute right-0 mr-3 leading-[40px] text-skin-link">
                            100%
                          </div>
                          <div
                            className="h-[40px] rounded-md bg-skin-border"
                            style={{ width: "99.9958 %" }}
                          ></div>
                        </div>
                        <div className="relative mt-1 w-full">
                          <div className="absolute ml-3 flex items-center leading-[43px] text-skin-link">
                            {" "}
                            Keep PT at 2.5M UNI
                            <span className="ml-1 text-skin-text">490 UNI</span>
                          </div>
                          <div className="absolute right-0 mr-3 leading-[40px] text-skin-link">
                            0%
                          </div>
                          <div
                            className="h-[40px] rounded-md bg-skin-border"
                            style={{ width: "0.00232088 %" }}
                          ></div>
                        </div>
                        <div className="relative mt-1 w-full">
                          <div className="absolute ml-3 flex items-center leading-[43px] text-skin-link">
                            {" "}
                            Abstain
                            <span className="ml-1 text-skin-text">395 UNI</span>
                          </div>
                          <div className="absolute right-0 mr-3 leading-[40px] text-skin-link">
                            0%
                          </div>
                          <div
                            className="h-[40px] rounded-md bg-skin-border"
                            style={{ width: "0.00186835%" }}
                          ></div>
                        </div>
                      </div>
                    </a>
                    <div className="mt-3">
                      <span className="cursor-help text-sm">
                        Ended 5 days ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-y border-skin-border bg-skin-block-bg text-base md:rounded-xl md:border transition-colors">
            <div className="leading-5 sm:leading-6">
              <div>
                <div className="block p-3 text-skin-text sm:p-4">
                  <div>
                    <div className="flex h-[26px] items-start justify-between">
                      <div className="flex items-center gap-1">
                        <div data-headlessui-state="">
                          <button
                            id="headlessui-popover-button-40"
                            type="button"
                            aria-expanded="false"
                            data-headlessui-state=""
                          >
                            <a
                              href="#/profile/0x13BDaE8c5F0fC40231F0E6A4ad70196F59138548"
                              className="whitespace-nowrap"
                              tabIndex={-1}
                            >
                              <div className="flex flex-nowrap items-center space-x-1">
                                <div>
                                  <img
                                    className="rounded-full bg-skin-border object-cover"
                                    alt="avatar"
                                    style={{
                                      width: "20px",
                                      height: "20px",
                                      minWidth: "20px",
                                      display: "none",
                                    }}
                                  />
                                  <img
                                    src="https://cdn.stamp.fyi/avatar/eth:0x13BDaE8c5F0fC40231F0E6A4ad70196F59138548?s=40"
                                    className="rounded-full bg-skin-border object-cover"
                                    alt="avatar"
                                    style={{
                                      width: "20px",
                                      height: "20px",
                                      minWidth: "20px",
                                    }}
                                  />
                                </div>

                                <span className="w-full cursor-pointer truncate text-skin-link">
                                  michiganblockchain.eth
                                </span>
                              </div>
                            </a>
                          </button>
                        </div>
                        <div
                          style={{
                            position: "fixed",
                            height: "0px",
                            padding: "0px",
                            overflow: "hidden",
                            clip: "rect(0px, 0px, 0px, 0px)",
                            whiteSpace: "nowrap",
                            borderWidth: "0px",
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div className="text-white rounded-full px-[12px] text-sm h-[24px] w-fit leading-[23px] bg-[#BB6BD9]">
                        Closed
                      </div>
                    </div>
                    <a
                      href="#/uniswapgovernance.eth/proposal/0xf30cebb7e0819b8a9ad374d82af5866d0329b3628f374cdbc434760337e99cd2"
                      className="cursor-pointer"
                    >
                      <div className="relative mb-1 mt-3 break-words pr-[80px] leading-[32px]">
                        <h3 className="inline pr-2">
                          [Temperature Check] Deploy Uniswap v3 on Rootstock
                          (Bitcoin Sidechain)
                        </h3>
                      </div>
                      <p className="line-clamp-2 break-words text-md font-semibold">
                        For the full proposal on the forums, please visit
                        https://gov.uniswap.org/t/deploy-uniswap-v3-on-rootstock-bitcoin-sidechain/22466
                        given this snapshot passes.
                      </p>
                      <div className="">
                        <div className="relative mt-1 w-full">
                          <div className="absolute ml-3 flex items-center leading-[43px] text-skin-link">
                            <svg
                              viewBox="0 0 24 24"
                              width="1.2em"
                              height="1.2em"
                              className="-ml-1 mr-2 text-sm"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m5 13l4 4L19 7"
                              ></path>
                            </svg>{" "}
                            Yes
                            <span className="ml-1 text-skin-text">21M UNI</span>
                          </div>
                          <div className="absolute right-0 mr-3 leading-[40px] text-skin-link">
                            100%
                          </div>
                          <div
                            className="h-[40px] rounded-md bg-skin-border"
                            style={{ width: "99.999%" }}
                          ></div>
                        </div>
                        <div className="relative mt-1 w-full">
                          <div className="absolute ml-3 flex items-center leading-[43px] text-skin-link">
                            {" "}
                            No
                            <span className="ml-1 text-skin-text">68 UNI</span>
                          </div>
                          <div className="absolute right-0 mr-3 leading-[40px] text-skin-link">
                            0%
                          </div>
                          <div
                            className="h-[40px] rounded-md bg-skin-border"
                            style={{ width: "0.000323647 %" }}
                          ></div>
                        </div>
                        <div className="relative mt-1 w-full">
                          <div className="absolute ml-3 flex items-center leading-[43px] text-skin-link">
                            {" "}
                            Abstain
                            <span className="ml-1 text-skin-text">143 UNI</span>
                          </div>
                          <div className="absolute right-0 mr-3 leading-[40px] text-skin-link">
                            0%
                          </div>
                          <div
                            className="h-[40px] rounded-md bg-skin-border"
                            style={{ width: "0.000675287%" }}
                          ></div>
                        </div>
                      </div>
                    </a>
                    <div className="mt-3">
                      <span className="cursor-help text-sm">
                        Ended 5 days ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-y border-skin-border bg-skin-block-bg text-base md:rounded-xl md:border transition-colors">
            <div className="leading-5 sm:leading-6">
              <div>
                <div className="block p-3 text-skin-text sm:p-4">
                  <div>
                    <div className="flex h-[26px] items-start justify-between">
                      <div className="flex items-center gap-1">
                        <div data-headlessui-state="">
                          <button
                            id="headlessui-popover-button-42"
                            type="button"
                            aria-expanded="false"
                            data-headlessui-state=""
                          >
                            <a
                              href="#/profile/0x1855f41B8A86e701E33199DE7C25d3e3830698ba"
                              className="whitespace-nowrap"
                              tabIndex={-1}
                            >
                              <div className="flex flex-nowrap items-center space-x-1">
                                <div>
                                  <img
                                    className="rounded-full bg-skin-border object-cover"
                                    alt="avatar"
                                    style={{
                                      width: "20px",
                                      height: "20px",
                                      minWidth: "20px",
                                      display: "none",
                                    }}
                                  />
                                  <img
                                    src="https://cdn.stamp.fyi/avatar/eth:0x1855f41B8A86e701E33199DE7C25d3e3830698ba?s=40&amp;ts=1681992719"
                                    className="rounded-full bg-skin-border object-cover"
                                    alt="avatar"
                                    style={{
                                      width: "20px",
                                      height: "20px",
                                      minWidth: "20px",
                                    }}
                                  />
                                </div>
                                <span className="w-full cursor-pointer truncate text-skin-link">
                                  0xkeyrock.eth
                                </span>
                              </div>
                            </a>
                          </button>
                        </div>
                        <div
                          style={{
                            position: "fixed",
                            height: "0px",
                            padding: "0px",
                            overflow: "hidden",
                            clip: "rect(0px, 0px, 0px, 0px)",
                            whiteSpace: "nowrap",
                            borderWidth: "0px",
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div className="text-white rounded-full px-[12px] text-sm h-[24px] w-fit leading-[23px] bg-[#BB6BD9]">
                        Closed
                      </div>
                    </div>
                    <a
                      href="#/uniswapgovernance.eth/proposal/0x73753f8ccab7747563b9c17a0bc746e6207991561278d7cadfaa1a7be12b081a"
                      className="cursor-pointer"
                    >
                      <div className="relative mb-1 mt-3 break-words pr-[80px] leading-[32px]">
                        <h3 className="inline pr-2">
                          [Temperature Check]: Competition of Delegation of UNI
                          to Active but Underrepresented Delegates
                        </h3>
                      </div>
                      <p className="line-clamp-2 break-words text-md font-semibold">
                        Summary -Should the onchain vote be approved and there
                        are qualified applicants but one or more of them are
                        disqualified in the future due to their low vote
                        participation, there will NOT be a new application and
                        snapshot vote to give the opportunity to another
                        delegate. -As mentioned by in a previous proposal
                        seeking UNI delegation, there will be deployment of at
                        max four new Franchiser contracts, each one funded with
                        2.5M UNI (10M UNI total). The owner of these Franchiser
                        instance’s would be the Timelock, while the at max four
                        delegates chosen through the voting process outlined
                        above can act as the delegatees.
                      </p>
                      <div className="">
                        <div className="relative mt-1 w-full">
                          <div className="absolute ml-3 flex items-center leading-[43px] text-skin-link">
                            <svg
                              viewBox="0 0 24 24"
                              width="1.2em"
                              height="1.2em"
                              className="-ml-1 mr-2 text-sm"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m5 13l4 4L19 7"
                              ></path>
                            </svg>{" "}
                            For
                            <span className="ml-1 text-skin-text">17M UNI</span>
                          </div>
                          <div className="absolute right-0 mr-3 leading-[40px] text-skin-link">
                            100%
                          </div>
                          <div
                            className="h-[40px] rounded-md bg-skin-border"
                            style={{ width: "99.9974 %" }}
                          ></div>
                        </div>
                        <div className="relative mt-1 w-full">
                          <div className="absolute ml-3 flex items-center leading-[43px] text-skin-link">
                            {" "}
                            Against
                            <span className="ml-1 text-skin-text">395 UNI</span>
                          </div>
                          <div className="absolute right-0 mr-3 leading-[40px] text-skin-link">
                            0%
                          </div>
                          <div
                            className="h-[40px] rounded-md bg-skin-border"
                            style={{ width: "0.00236273 %" }}
                          ></div>
                        </div>
                        <div className="relative mt-1 w-full">
                          <div className="absolute ml-3 flex items-center leading-[43px] text-skin-link">
                            {" "}
                            Abstain
                            <span className="ml-1 text-skin-text">40 UNI</span>
                          </div>
                          <div className="absolute right-0 mr-3 leading-[40px] text-skin-link">
                            0%
                          </div>
                          <div
                            className="h-[40px] rounded-md bg-skin-border"
                            style={{ width: "0.000240564 %" }}
                          ></div>
                        </div>
                      </div>
                    </a>
                    <div className="mt-3">
                      <span className="cursor-help text-sm">
                        Ended 2 months ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-y border-skin-border bg-skin-block-bg text-base md:rounded-xl md:border transition-colors">
            <div className="leading-5 sm:leading-6">
              <div>
                <div className="block p-3 text-skin-text sm:p-4">
                  <div>
                    <div className="flex h-[26px] items-start justify-between">
                      <div className="flex items-center gap-1">
                        <div data-headlessui-state="">
                          <button
                            id="headlessui-popover-button-46"
                            type="button"
                            aria-expanded="false"
                            data-headlessui-state=""
                          >
                            <a
                              href="#/profile/0xf94e5Cdf41247E268d4847C30A0DC2893B33e85d"
                              className="whitespace-nowrap"
                              tabIndex={-1}
                            >
                              <div className="flex flex-nowrap items-center space-x-1">
                                <div>
                                  <img
                                    className="rounded-full bg-skin-border object-cover"
                                    alt="avatar"
                                    style={{
                                      width: "20px",
                                      height: "20px",
                                      minWidth: "20px",
                                      display: "none",
                                    }}
                                  />
                                  <img
                                    src="https://cdn.stamp.fyi/avatar/eth:0xf94e5Cdf41247E268d4847C30A0DC2893B33e85d?s=40"
                                    className="rounded-full bg-skin-border object-cover"
                                    alt="avatar"
                                    style={{
                                      width: "20px",
                                      height: "20px",
                                      minWidth: "20px",
                                    }}
                                  />
                                </div>
                                <span className="w-full cursor-pointer truncate text-skin-link">
                                  Moody
                                </span>
                              </div>
                            </a>
                          </button>
                        </div>
                        <div
                          style={{
                            position: "fixed",
                            height: "0px",
                            padding: "0px",
                            overflow: "hidden",
                            clip: "rect(0px, 0px, 0px, 0px)",
                            whiteSpace: "nowrap",
                            borderWidth: "0px",
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div className="text-white rounded-full px-[12px] text-sm h-[24px] w-fit leading-[23px] bg-[#BB6BD9]">
                        Closed
                      </div>
                    </div>
                    <a
                      href="#/uniswapgovernance.eth/proposal/0x738fbd583c272b91322c4fae5d692387001445069398ce52b7cdc5c9a16105d6"
                      className="cursor-pointer"
                    >
                      <div className="relative mb-1 mt-3 break-words pr-[80px] leading-[32px]">
                        <h3 className="inline pr-2">
                          [Temperature Check]: Invest in Ekubo Protocol
                        </h3>
                      </div>
                      <div className="mt-3">
                        <div className="relative mt-1 w-full">
                          <div className="absolute ml-3 flex items-center leading-[43px] text-skin-link">
                            {" "}
                            No change
                            <span className="ml-1 text-skin-text">12M UNI</span>
                          </div>
                          <div className="absolute right-0 mr-3 leading-[40px] text-skin-link">
                            36.18%
                          </div>
                          <div
                            className="h-[40px] rounded-md bg-skin-border"
                            style={{ width: "36.1773%" }}
                          ></div>
                        </div>
                        <div className="relative mt-1 w-full">
                          <div className="absolute ml-3 flex items-center leading-[43px] text-skin-link">
                            <svg
                              viewBox="0 0 24 24"
                              width="1.2em"
                              height="1.2em"
                              className="-ml-1 mr-2 text-sm"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m5 13l4 4L19 7"
                              ></path>
                            </svg>
                            Invest in Ekubo Protocol
                            <span className="ml-1 text-skin-text">21M UNI</span>
                          </div>
                          <div className="absolute right-0 mr-3 leading-[40px] text-skin-link">
                            63.82%
                          </div>
                          <div
                            className="h-[40px] rounded-md bg-skin-border"
                            style={{ width: "63.8227 %" }}
                          ></div>
                        </div>
                      </div>
                    </a>
                    <div className="mt-3">
                      <span className="cursor-help text-sm">
                        Ended 3 months ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalContainer;
