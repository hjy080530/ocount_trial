import React from "react";
import "./ConfirmAmount.css";
import ConfirmAmountDashboard from "../components/ConfirmAmountDashboard";
import { AuthProvider } from "../AuthContext";
import Header from '../components/Header'
import Footer from '../components/Footer';
const ConfirmAmount=()=>{
    return (
        <>
            <div className="container">
                <div className="element-sort">
                    <AuthProvider>
                    <Header />
                    <ConfirmAmountDashboard/>
                    </AuthProvider>
                    <Footer/>
                </div>
            </div>
        </>
    )
}
export default ConfirmAmount;