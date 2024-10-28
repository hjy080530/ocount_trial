import React from 'react';
import './Contact.css';
import Contactimg from "../image/Contact.svg";
const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-sort">
                <p className="contact-text">문의하기</p>
                <img src={Contactimg} className='contact-img' alt="Contactimg" />
            </div>
        </div>
    );
}
export default Contact;