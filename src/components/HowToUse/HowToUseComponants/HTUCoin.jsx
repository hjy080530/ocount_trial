import React from "react";
import "./HTUComponants.css";
import ExImg from "../../../image/Coin.png"

const HTUCoCoin=()=>{
    return(
        <>
            <div className="HTUComSort">
                <div className="ExSortCoin">
                    <img src={ExImg} className="ExImg" alt="ExImg"></img>
                    <div className="HTUCoinTextSort">
                        <p className="ExMiddleText">웹페이지에서 충전하기</p>
                        <p className="ExSmallText">오카운트를 들어가<br/>충전하기를 눌러 충전 할 수 있어요<br/>자세한 사항은 여기를 눌러 확인하세요</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HTUCoCoin;