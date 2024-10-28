import React from 'react';
import './HowToUseButton.css'
import lighticon from '../image/lighticon.svg'
const HowToUseButton = () => {
    return (
        <div className="how-to-use-button-container">
            <div className='how-to-use-inner-sort'>
                <img src={lighticon} alt="lighticon" className="how-to-use-button-lighticon" />
                <div className="how-to-use-button-text-sort">
                    <p className="how-to-use-button-text-En">How to use?</p>
                    <p className="how-to-use-button-text-Ko">사용법</p>
                </div>
            </div>
        </div>
    );
};
export default HowToUseButton;