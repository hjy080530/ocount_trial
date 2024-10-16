import React from "react";
import './AmountView.css'

const AmountView = () =>{
    return (
        <>
        <div className="amountView">
            <div>
                <p className="current">현재 사용가능한 금액</p>
                <p className="currentMoney">로그인 후 사용가능합니다.</p>
            </div>
        </div>
        </>
    )
}

export default AmountView;