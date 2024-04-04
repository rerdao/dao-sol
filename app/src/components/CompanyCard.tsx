import React from "react";

interface Icompany{
    about: string;
    companyName: string;
    companyImageUrl: string;
}

interface ICompanyCard {
    index: number;
    company: Icompany;
}

const CompanyCard = ({index, company}: ICompanyCard) => {
    return (
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
    )
}

export default CompanyCard;