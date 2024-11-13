import React from "react";
import "./HowToUsePage.jsx"
import Header from "../components/Header.jsx";
import HowToUse from "../components/HowToUse.jsx";
import Footer from "../components/HowToUseFooter.jsx";
import { AuthProvider } from "../AuthContext";
const HowToUsePage =()=>{
    return(
        <>
            <div className="container1">
            <AuthProvider>
                <Header/>
                <div className="element-sort">
                    <HowToUse/>
                </div>
                </AuthProvider>
                <Footer/>
            </div>
        </>
    );
}


export default HowToUsePage;