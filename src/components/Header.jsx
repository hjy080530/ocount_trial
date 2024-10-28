import React from "react";
import logo from '../image/logo.svg';
import './Header.css'

const Header = () => {
    return(
        <>
        <div className="main-header">
            <div className="main-header-logo">
                <img src={logo} alt="main-logo" className="main-header-logo-img" />
            </div>
            <button className="log-in-button">
                <p className="log-in-buttonp">로그인</p>
            </button>
        </div>
        </>
    )
}

export default Header;