import React from "react";
import "./HTUComponants.css";
import ExImg from "../../../image/Credit Machine.png"

const HTUCoCounter=()=>{
    return(
        <>
            <div className="HTUComSort">
                <div className="ExSort">
                    <img src={ExImg} className="ExImgCounter" alt="ExImg"></img>
                    <div className="HTUCounterTextSort">
                        <p className="ExMiddleText">카운터에서</p>
                        <p className="ExSmallText">매점 카운터에서 계산할 때는,<br/>아리페이를 사용 함을 밝히고<br/>매점부원의 안내를 따라주세요</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HTUCoCounter;