import React from 'react';
import './HowToUseButton.css'
import lighticon from '../image/lighticon.svg'
import {useNavigate} from 'react-router-dom';

const HowToUseButton = () => {
    const navigate = useNavigate();
    return (
        <div className="how-to-use-button-container" onClick={()=>navigate('/howToUsePage')}>
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