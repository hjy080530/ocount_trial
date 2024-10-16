import React from "react";
import './Dashboard.css'
import AmountView from "./AmountView"; 
import PeopleStatus from "./PeopleStatus";

const Dashboard = ()=>{
    return(
        <>
        <div className="dashBoard">
            <AmountView />
            <PeopleStatus />
        </div>
        </>
    )
}
export default Dashboard;