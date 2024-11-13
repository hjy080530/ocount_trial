import React from "react";
import "./HowToUse.css";
import BigOccountLogo from '../image/BigOccountLogo.png';
const HowToUse = ()=>{
    return(
        <>
            <div className="container1">
                <div className="firstDesc">
                    <img src={BigOccountLogo} className='bigOccountLogo' alt="BigOccountLogo" />
                </div>
            </div>
        </>
    );
}


export default HowToUse;