import React, {useContext, createContext} from "react";
import Header from "./Header";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { useProgram } from "../utils/useProgram";

export const LayoutContext = createContext(null);



const Layout = ({ children }) => {

    const wallet = useAnchorWallet();
    const { connection } = useConnection();
    const { program } = useProgram({ connection, wallet });

    return (
        <LayoutContext.Provider value={{ wallet, connection, program }}>
                <Header />
                <div id="content" className="pb-6 pt-4">{ children }</div>
        </LayoutContext.Provider>
    );
}

export default Layout;