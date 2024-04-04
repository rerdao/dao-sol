import React from "react";

const SearchBar = () => {
    return (
        <div className="relative">
                    <div className="px-4 mx-auto max-w-[1012px] mb-4 flex flex-col flex-wrap items-center xs:flex-row md:flex-nowrap">
                        <div tabIndex={-1} className="w-full md:max-w-[420px]">
                            <div className="flex rounded-full border pl-3 pr-0 focus-within:border-skin-text">
                                <div className="flex h-[44px] items-center flex-auto pr-2" style={{ color: 'white' }}>
                                    <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" className="mr-2 flex-shrink-0 text-[19px] text-skin-link">
                                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21l-6-6m2-5a7 7 0 1 1-14 0a7 7 0 0 1 14 0Z">
                                        </path>
                                    </svg>
                                    <input placeholder="Search" type="text" autoCorrect="off" autoCapitalize="none" className="input w-full border-none" />
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default SearchBar;