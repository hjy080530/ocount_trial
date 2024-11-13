import React from "react";
import "./HowToUse.css";
import BigOccountLogo from '../../image/BigOccountLogo.png';
import HTUCoCounter from "./HowToUseComponants/HTUCounter";
import HTUCoTrophy from "./HowToUseComponants/HTUTrophy";
import HTUCoCoin from "./HowToUseComponants/HTUCoin";
import HTUCoCard from "./HowToUseComponants/HTUCard";
import {useNavigate} from 'react-router-dom';

const HowToUse = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="container1">
                <div className="firstDesc">
                    <p className="firstDesctext">내 학생증안의 작은 지갑</p>
                    <img src={BigOccountLogo} onClick={()=>navigate('/')} className="bigOccountLogo" alt="BigOccountLogo"/>
                </div>
                <div className="secondDesc">
                    <div className="imgTextSort">
                        <img src={BigOccountLogo} className="smallOccountLogo" alt="smallOccountLogo"/>
                        <p className="middleText">가 무엇인가요?</p>
                    </div>
                    <p className="smallText">공간 아리소리에서 사용되는 포인트를 사용하고 , 충전할 수 있는 서비스입니다<br/>
                        키오스크 등에서도 사용 할 수 있어요.</p>
                </div>
                <div className="secondDesc">
                    <div className="exSort">
                        <div className="imgTextSort">
                            <img src={BigOccountLogo} className="smallOccountLogo" alt="smallOccountLogo"/>
                            <p className="middleText">는 어떻게 충전하나요?</p>
                        </div>
                        <div className="exSmallSort">
                            <HTUCoTrophy/>
                            <HTUCoCoin/>
                        </div>
                    </div>
                </div>
                <div className="secondDesc">
                    <div className="exSort">
                        <div className="imgTextSort">
                            <img src={BigOccountLogo} className="smallOccountLogo" alt="smallOccountLogo"/>
                            <p className="middleText">는 어떻게 사용하나요?</p>
                        </div>
                        <p className="exSmallSort">
                            <HTUCoCounter/>
                            <HTUCoCard/>
                        </p>
                    </div>
                </div>
                <div className="firstDesc">
                    <p className="firstDesctext">내 학생증안의 작은 지갑</p>
                    <img src={BigOccountLogo} onClick={()=>navigate('/')}  className="bigOccountLogo" alt="BigOccountLogo"/>
                </div>
            </div>
        </>
    );
}

export default HowToUse;