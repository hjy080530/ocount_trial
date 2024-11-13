import React from "react";
import Header from "../components/Header.jsx";
import HowToUse from "../components/HowToUse/HowToUse.jsx";
import Footer from "../components/HowToUse/HowToUseFooter.jsx";
import { AuthProvider } from "../AuthContext";
import "./HowToUsePage.css"
const HowToUsePage =()=>{
    return(
        <>
            <div className="container3">
                <AuthProvider>
                    <div className="element-sort3">
                        <Header/>
                        <HowToUse/>
                    </div>
                    <Footer/>
                </AuthProvider>
            </div>
        </>
    );
}


export default HowToUsePage;