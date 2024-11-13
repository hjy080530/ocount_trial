import React from "react";
import "./HTUComponants.css";
import ExImg from "../../../image/Payment Card.png"

const HTUCoCoin=()=>{
    return(
        <>
            <div className="HTUComSort">
                <div className="ExSort">
                    <img src={ExImg} className="ExImgCard" alt="ExImg"></img>
                    <div className="HTUCardTextSort">
                        <p className="ExMiddleText">키오스크에서</p>
                        <p className="ExSmallText">오카운트를 들어가<br/>충전하기를 눌러 충전 할 수 있어요<br/>자세한 사항은 여기를 눌러 확인하세요</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HTUCoCoin;