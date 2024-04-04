import React, { useContext } from "react";
import { LayoutContext } from "../components/Layout";
import CompanyCard from "../components/CompanyCard";

const HomeContainer = () => {
    let { wallet, connection, program } = useContext(LayoutContext);
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
            <div className="px-0 md:px-4 mx-auto max-w-[1012px]">
                  <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                      {companyList.map((company, index) => (
                          <CompanyCard key={index} index={index} company={company} />
                      ))}
                  </div>
              </div>

    );
}

export default HomeContainer;