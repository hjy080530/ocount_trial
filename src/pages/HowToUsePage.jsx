import React from "react";
import "./"
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
                    <HowToUse/>
                    <Footer/>
                </AuthProvider>
            </div>
        </>
    );
}


export default HowToUsePage;