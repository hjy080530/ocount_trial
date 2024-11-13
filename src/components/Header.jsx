import React, { useContext } from "react";
import { AuthContext } from '../AuthContext';
import logo from '../image/logo.svg';
import './Header.css';

const Header = () => {
    const { isLogin, userName } = useContext(AuthContext);

    return (
        <>
            <div className="main-header">
                <div className="main-header-logo">
                    <img src={logo} alt="main-logo" className="main-header-logo-img" />
                </div>
                <div>
                    {isLogin ? (
                        userName ? (
                            <p className="log-in-buttonp">{userName}님, 안녕하세요!</p>
                        ) : null
                    ) : (
                        <button className="log-in-button">
        ₩                    <p className="log-in-buttonp">로그인</p>
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default Header;