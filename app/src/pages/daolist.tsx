import React from "react";

function daoList() {
    const companyList = [
        {
            "authority": "https://cdn.stamp.fyi/space/lido-snapshot.eth?s=164&cb=59735609c15c8638",
            "companyName": "Lido",
            "companyImageUrl": "https://cdn.stamp.fyi/space/lido-snapshot.eth?s=164&cb=59735609c15c8638",
            "about": "19K members"
        },
        {
            "authority": "https://cdn.stamp.fyi/space/stgdao.eth?s=164&cb=7faee6797e3d57e7",
            "companyName": "Stargate DAO",
            "companyImageUrl": "https://cdn.stamp.fyi/space/stgdao.eth?s=164&cb=7faee6797e3d57e7",
            "about": "822K members"
        },
        {
            "authority": "https://cdn.stamp.fyi/space/arbitrumfoundation.eth?s=164&cb=5d07bb87673a5d76",
            "companyName": "Arbitrum DAO",
            "companyImageUrl": "https://cdn.stamp.fyi/space/arbitrumfoundation.eth?s=164&cb=5d07bb87673a5d76",
            "about": "285K members"
        },
        {
            "authority": "https://cdn.stamp.fyi/space/aave.eth?s=164&cb=c1026072cf0a6c54",
            "companyName": "AAve",
            "companyImageUrl": "https://cdn.stamp.fyi/space/aave.eth?s=164&cb=c1026072cf0a6c54",
            "about": "132K members"
        },
        {
            "authority": "https://cdn.stamp.fyi/space/opcollective.eth?s=164&cb=37be859f9d4da79b",
            "companyName": "Optimism",
            "companyImageUrl": "https://cdn.stamp.fyi/space/opcollective.eth?s=164&cb=37be859f9d4da79b",
            "about": "188K members"
        },
        {
            "authority": "https://cdn.stamp.fyi/space/cakevote.eth?s=164&cb=7c4fe90775e874aa",
            "companyName": "PancakeSwap",
            "companyImageUrl": "https://cdn.stamp.fyi/space/cakevote.eth?s=164&cb=7c4fe90775e874aa",
            "about": "102K members"
        }
    ];
    
    return (
        <div>
            <div id="content" className="pb-6 pt-4">
                <div>
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

                </div>
                <div className="px-0 md:px-4 mx-auto max-w-[1012px]">
                    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                        {companyList.map((company, index) => (
                            <div key={index} style={{ padding: '5px' }}>
                                <div className="border-y border-skin-border bg-skin-block-bg text-base md:rounded-xl md:border mb-0 flex items-center justify-center text-center transition-all hover:border-skin-text" style={{ height: '266px' }}>
                                <div className="p-4 leading-5 sm:leading-6">
                                    <div className="relative mb-2 inline-block">
                                    <div symbol-index="space" className="mb-1">
                                        <img className="rounded-full bg-skin-border object-cover" alt="avatar" style={{ width: '82px', height: '82px', minWidth: '82px', display: 'none' }} />
                                        <img src={company.companyImageUrl} className="rounded-full bg-skin-border object-cover" alt="avatar" style={{ width: '82px', height: '82px', minWidth: '82px' }} />
                                    </div>
                                    </div>
                                    <div className="flex items-center justify-center gap-1 truncate">
                                    <h3 className="mb-0 mt-0 !h-[32px] overflow-hidden pb-0 text-[22px]" style={{ color: 'white' }} >{company.companyName}</h3>
                                    </div>
                                    <div className="mb-[12px] text-skin-text" style={{ color: 'grey' }}>{company.about}</div>
                                    <div className="mx-auto">
                                    <button type="button" className="tune-button mx-auto group min-w-[125px]">
                                        <span style={{ color: 'white' }}>Join</span>
                                    </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default daoList;