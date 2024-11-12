import React,{useContext} from "react";
import { AuthContext } from '../AuthContext';
import {useNavigate} from 'react-router-dom';
import './AmountView.css'

const AmountView = () =>{
    const { isLogin, userAmount } = useContext(AuthContext);
    const navigate = useNavigate();
    return (
        
        <>
        <div onClick={() => navigate('/other')}>
            
        </div>
        {isLogin ?(
            <div className="amountView" onClick={() => navigate('/confirmAmount')}>
                <div className="amountView-text">
                    <p className="current">현재 사용가능한 금액</p>
                    <p className="currentMoney">{userAmount}원 사용가능합니다.</p>
                </div>
            </div>
            ):(
                <div className="amountView" onClick={() => navigate('/confirmAmount')}>
                    <div className="amountView-text">
                        <p className="current">현재 사용가능한 금액</p>
                        <p className="currentMoney">로그인 후 사용가능합니다.</p>
                </div>
                </div>
            )
        }
        </>
    )
}

export default AmountView;