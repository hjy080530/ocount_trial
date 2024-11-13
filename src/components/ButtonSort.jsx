import React from 'react';
import './ButtonSort.css';
import HowToUseButton from './HowToUse/HowToUseButton';
import Contact from './Contact';
import Announcement from './Announcement';

const ButtonSort = () => {
    return (
        <div className="button-sort-container">
            <HowToUseButton />
            <div className='button-sort-container-small'>
                <Contact />
                <Announcement />
            </div>
            
        </div>
    );
};

export default ButtonSort;
