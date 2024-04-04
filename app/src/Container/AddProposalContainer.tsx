import React, { useContext } from "react";
import { LayoutContext } from "../components/Layout";
import CustomButton from "../components/Button";
import CustomTextarea from "../components/CustomTextarea";
import CustomInput from "../components/CustomInput";

const AddProposalContainer = () => {
  let { wallet, connection, program } = useContext(LayoutContext);

  return (
    <div
      className="px-4 md:px-4 mx-auto max-w-[1012px] pt-8 pb-8 mb-8"
      style={{ color: "#8b949e" }}
    >
      <div className="relative float-left pl-0 lg:w-3/5 lg:pl-2">
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
          <CustomInput
            placeholder="e.g. Yam Network"
            maxLength={32}
            name="title"
            label="Title"
          />

          <CustomTextarea
            maxLength={160}
            name=""
            label="Description (optional)"
            placeholder="What is your organisation about?"
            style={{
              resize: "none",
              paddingLeft: "16px",
              paddingRight: "16px",
              borderRadius: "10px",
            }}
          />

          <CustomInput
            placeholder="e.g. https://www.example.com"
            maxLength={256}
            name="discussion"
            label="Discussion (optional)"
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
      <div className="relative float-right pl-0 lg:pl-0 lg:w-80">
        <div className="mt-3 space-y-3 sm:mt-0">
          <div className="border-y border-skin-border bg-skin-block-bg text-base md:rounded-xl md:border rounded-xl border text-skin-text !rounded-none border-x-0 md:!rounded-xl md:mx-0 p-10">
            <CustomButton
              btntype="black"
              style={{
                backgroundColor: "transparent",
                padding: "5px",
                width: "-webkit-fill-available",
              }}
              value="Submit"
            />
            <CustomButton
              style={{
                backgroundColor: "#4e44ce",
                padding: "5px",
                width: "-webkit-fill-available",
                marginTop: "2em",
              }}
              value="Submit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProposalContainer;
