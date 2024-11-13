import React from "react";
import "./HTUComponants.css";
import ExImg from "../../../image/trophy.png"

const HTUCoTrophy=()=>{
    return(
        <>
            <div className="HTUComSort">
                <div className="ExSort">
                    <img src={ExImg} className="ExImgTrophy" alt="ExImg"></img>
                    <p className="ExMiddleText">교내 행사 참여</p>
                    <p className="ExSmallText">교내 행사에 참여하여<br/>
                        시상을 하게 되면<br/>
                        자동으로 본인계정에 충전이 됩니다!</p>
                </div>
            </div>
        </>
    );
}

export default HTUCoTrophy;