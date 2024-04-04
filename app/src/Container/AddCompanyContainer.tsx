import React, { useContext, useState } from "react";
import { LayoutContext } from "../components/Layout";
import CustomButton from "../components/Button";
import CustomInput from "../components/CustomInput";
import CustomTextarea from "../components/CustomTextarea";
import CustomSelect from "../components/CustomSelect";
import CustomLabel from "../components/CustomLabel";
import Sidebar from "../components/Sidebar";

const AddCompanyContainer = () => {
  let { wallet, connection, program } = useContext(LayoutContext);
  
  const [companyname, updateCompanyName] = useState(null);
    const [about, updateAbout] = useState(null);
  const [category, updateCategory] = useState(null);
  const [website, updateWebsite] = useState(null);
    const [terms, updateTerms] = useState(null);
    const [twitter, updateTwitter] = useState(null);
    const [github, updateGithub] = useState(null);
    const [coingecko, updateCoingecko] = useState(null);

    return (
      <div
        className="px-4 md:px-4 mx-auto max-w-[1012px] pt-8 pb-8 mb-8"
        style={{ color: "#8b949e" }}
      >
        <Sidebar />
        <div className="relative float-right w-full pl-0 lg:w-3/4 lg:pl-5">
          <form className="mt-3 space-y-3 sm:mt-0">
            <div className="border-y border-skin-border bg-skin-block-bg text-base md:rounded-xl md:border rounded-xl border text-skin-text !rounded-none border-x-0 md:!rounded-xl md:mx-0">
              <div className="p-4 leading-5 sm:leading-6">
                <div>
                  <svg
                    viewBox="0 0 24 24"
                    width="1.2em"
                    height="1.2em"
                    className="float-left mr-1 text-sm"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"
                    ></path>
                  </svg>
                  <div className="leading-5">
                    You are in view only mode, to modify space settings connect
                    with a controller or admin wallet.
                  </div>
                </div>
              </div>
            </div>
            <div className="border-y border-skin-border bg-skin-block-bg text-base md:rounded-xl md:border">
              <div className="group flex h-[57px] justify-between rounded-t-none border-b border-skin-border px-4 pb-[12px] pt-3 md:rounded-t-lg">
                <CustomLabel label="Profile" style={{ color: "white" }} />
                <div className="flex items-center"></div>
              </div>
              <div className="p-4 leading-5 sm:leading-6">
                <div className="space-y-2">
                  <div className="flex flex-col-reverse sm:flex-row">
                    <div className="mt-3 w-full space-y-2 sm:mt-0">
                      <div className="flex w-full">
                        <div>
                          <span className="mb-[2px] flex items-center gap-1 text-skin-text"></span>
                          <div>
                            <div className="relative">
                              <div>
                                <img
                                  className="rounded-full bg-skin-border object-cover"
                                  alt="avatar"
                                  style={{
                                    width: "80px",
                                    height: "80px",
                                    minWidth: "80px",
                                    display: "none",
                                  }}
                                />
                                <img
                                  src="https://cdn.stamp.fyi/space/uniswapgovernance.eth?s=160&amp;cb=7b5f087c16a60022"
                                  className="rounded-full bg-skin-border object-cover"
                                  alt="avatar"
                                  style={{
                                    width: "80px",
                                    height: "80px",
                                    minWidth: "80px",
                                  }}
                                />
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 top-0 cursor-not-allowed"></div>
                              <div className="cursor-not-allowed absolute bottom-[2px] right-0 rounded-full bg-skin-heading p-1">
                                <svg
                                  viewBox="0 0 24 24"
                                  width="1.2em"
                                  height="1.2em"
                                  className="text-[12px] text-skin-bg"
                                >
                                  <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 1 1 3.536 3.536L6.5 21.036H3v-3.572L16.732 3.732Z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <input
                            className="h-[80px]"
                            type="file"
                            accept="image/jpg, image/jpeg, image/png"
                            style={{ display: "none" }}
                          />
                        </div>
                      </div>
                      <CustomInput
                        placeholder="e.g. Yam Network"
                        maxLength={32}
                        name="companyname"
                        label="Name"
                        value={companyname}
                      />
                      <CustomTextarea
                        label="About"
                        name="about"
                        placeholder="What is your organisation about?"
                        maxLength={160}
                        style={{ resize: "none", height: "65px" }}
                        value={about}
                      />
                      <CustomSelect
                        name="category"
                        label="Categorie(s)"
                        placeholder="Select Categorie(s)"
                        style={{ maxWidth: "100%" }}
                        icon={
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg
                              viewBox="0 0 24 24"
                              width="1.2em"
                              height="1.2em"
                              className="text-sm"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9"
                              ></path>
                            </svg>
                          </div>
                        }
                      />
                      <CustomInput
                        placeholder="e.g. https://www.example.com"
                        maxLength={256}
                        name="website"
                        label="Website"
                        value={website}
                        icon={
                          <div className="  absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg
                              viewBox="0 0 24 24"
                              width="1.2em"
                              height="1.2em"
                              className="text-sm"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9"
                              ></path>
                            </svg>
                          </div>
                        }
                      />
                      <CustomInput
                        placeholder="e.g. https://example.com/terms"
                        maxLength={256}
                        name="terms"
                        label="Terms of service"
                        value={terms}
                        icon={
                          <div className="  absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg
                              viewBox="0 0 24 24"
                              width="1.2em"
                              height="1.2em"
                              className="text-sm"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9"
                              ></path>
                            </svg>
                          </div>
                        }
                      />
                      <div className="flex space-x-2 pr-2 pt-1 items-center">
                        <button
                          className="tune-switch relative inline-flex h-[22px] w-[38px] flex-shrink-0 cursor-pointer rounded-full border-2 transition-colors duration-200 ease-in-out switched-off-bg !cursor-not-allowed"
                          id="headlessui-switch-9"
                          role="switch"
                          type="button"
                          tabIndex={0}
                          aria-checked="false"
                          data-headlessui-state=""
                        >
                          <span className="sr-only">
                            Hide space from homepage
                          </span>
                          <span className="translate-x-0 shadow tune-switch-button   inline-block h-[18px] w-[18px] transform rounded-full transition duration-200 ease-in-out">
                            <span
                              className="opacity-100 duration-200 ease-in tune-switch switched-off-text absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                              aria-hidden="true"
                            >
                              <svg
                                className="h-[10px] w-[10px]"
                                fill="none"
                                viewBox="0 0 12 12"
                              >
                                <path
                                  d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </span>
                            <span
                              className="opacity-0 duration-100 ease-out tune-switch switched-on-text absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                              aria-hidden="true"
                            >
                              <svg
                                className="h-[10px] w-[10px]"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                              >
                                <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"></path>
                              </svg>
                            </span>
                          </span>
                        </button>
                        <div className="tune-label-container flex flex-col">
                          <div className="tune-label flex items-center gap-1">
                            Hide space from homepage{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-y border-skin-border bg-skin-block-bg text-base md:rounded-xl md:border">
              <div className="group flex h-[57px] justify-between rounded-t-none border-b border-skin-border px-4 pb-[12px] pt-3 md:rounded-t-lg">
                <CustomLabel
                  label="Social accounts"
                  style={{ color: "white" }}
                />
                <div className="flex items-center"> </div>
              </div>
              <div className="p-4 leading-5 sm:leading-6">
                <div className="space-y-3">
                  <div className="space-y-2 sm:flex sm:space-x-4 sm:space-y-0">
                    <CustomInput
                      name="twitter"
                      label="Twitter"
                      placeholder="e.g. elonmusk"
                      maxLength={15}
                      value={twitter}
                      icon={
                        <div className="  absolute inset-y-0 left-0 flex items-center pl-3">
                          <svg
                            width="1.2em"
                            height="1.2em"
                            fill="currentColor"
                            viewBox="0 0 30 30"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-[16px]"
                          >
                            <path d="M25.2688 9.53141C25.2846 9.76543 25.2846 9.99945 25.2846 10.2356C25.2846 17.432 19.9588 25.7316 10.2203 25.7316V25.7273C7.34353 25.7316 4.52651 24.884 2.10474 23.2857C2.52304 23.3375 2.94345 23.3634 3.3649 23.3645C5.74893 23.3666 8.06482 22.5438 9.94038 21.0286C7.67482 20.9844 5.68812 19.4648 4.99409 17.2465C5.78772 17.404 6.60546 17.3716 7.38441 17.1527C4.91441 16.6394 3.1374 14.407 3.1374 11.8145C3.1374 11.7907 3.1374 11.7681 3.1374 11.7454C3.87337 12.1671 4.6974 12.4011 5.5403 12.427C3.21393 10.8277 2.49683 7.64416 3.90167 5.15514C6.58974 8.55759 10.5558 10.626 14.8133 10.8449C14.3866 8.95337 14.9695 6.97122 16.345 5.64151C18.4774 3.57955 21.8312 3.68524 23.8357 5.87769C25.0214 5.6372 26.1579 5.18965 27.1979 4.55553C26.8026 5.81622 25.9755 6.8871 24.8705 7.56759C25.9199 7.44034 26.9452 7.15132 27.9108 6.71024C27.2 7.80592 26.3047 8.76034 25.2688 9.53141Z"></path>
                          </svg>
                        </div>
                      }
                    />
                    <CustomInput
                      name="github"
                      label="Github"
                      placeholder="e.g. vbuterin"
                      maxLength={39}
                      value={github}
                      icon={
                        <div className="  absolute inset-y-0 left-0 flex items-center pl-3">
                          <svg
                            width="1.2em"
                            height="1.2em"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                            className="text-[16px]"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      }
                    />
                    <CustomInput
                      name="coingecko"
                      label="CoinGecko"
                      placeholder="e.g. uniswap"
                      maxLength={32}
                      value={coingecko}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="" style={{ marginBottom: "4em", float: "right" }}>
              <CustomButton
                value="Submit"
                btntype="default"
                style={{
                  backgroundColor: "#4e44ce",
                  borderRadius: "10px",
                }}
              />
            </div>
          </form>
        </div>
      </div>
    );
}

export default AddCompanyContainer;