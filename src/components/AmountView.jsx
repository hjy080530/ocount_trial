import React,{useContext} from "react";
import { AuthContext } from '../AuthContext';
import './AmountView.css'

const AmountView = () =>{
    const { isLogin, userName,userAmount } = useContext(AuthContext);

    return (
        <>
        {isLogin ?(
                <div className="amountView">
                <div className="amountView-text">
                    <p className="current">{userName}님,</p>
                    <p className="currentMoney">{userAmount}x</p>
                </div>
            </div>
            ):null
        }
        <div className="amountView">
            <div className="amountView-text">
                <p className="current">현재 사용가능한 금액</p>
                <p className="currentMoney">로그인 후 사용가능합니다.</p>
            </div>
        </div>
        </>
    )
}

export default AmountView;