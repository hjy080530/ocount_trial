import React from 'react';
import './HowToUseButton.css'
import lighticon from '../image/lighticon.svg'
const HowToUseButton = () => {
    return (
        <div className="how-to-use-button-container">
                <img src={lighticon} alt="lighticon" className="how-to-use-button-lighticon" />
                <div className="how-to-use-button-text-sort">
                    <p className="how-to-use-button-text-En">how to use?</p>
                    <p className="how-to-use-button-text-Ko">사용법</p>
                </div>
            
        </div>
    );
};
export default HowToUseButton;