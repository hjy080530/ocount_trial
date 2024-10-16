import React from "react";
import './Dashboard.css'
import AmountView from "./AmountView"; 
import PeopleStatus from "./PeopleStatus";
import ButtonSort from "./ButtonSort";


const Dashboard = ()=>{
    return(
        <>
        <div className="dashBoard">
            <AmountView />
            <PeopleStatus />
            <ButtonSort />
        </div>
        </>
    )
}
export default Dashboard;