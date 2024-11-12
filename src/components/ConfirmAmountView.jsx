import { AuthContext } from "../AuthContext";
import React,{useContext} from "react";
import './ConfirmAmountView.css';

const ConfirmAmountView =()=>{
    const { isLogin, userName,userAmount } = useContext(AuthContext);

    return (
        <>
        {isLogin===true ?(
                <div className="confirmAmountView">
                    <div className="confirmSort">
                        <div className="confirmAmountView-text">
                            <p className="current">{userName}님,</p>
                            <p className="currentMoney">{userAmount}원 남았습니다.</p>
                        </div>
                        <button className="charge">
                            <p className="chargeText">충전하기</p>
                        </button>
                    </div>
                </div>
            ):(
                <div className="confirmAmountView">
                    <div className="confirmAmountView-text">
                        <p className="current">현재 사용가능한 금액</p>
                        <p className="currentMoney">로그인 후 사용가능합니다.</p>
                    </div>
                </div>
            )
        }
        </>
    );
}






export default ConfirmAmountView;