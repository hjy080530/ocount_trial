import React from 'react';
import './Contact.css';
import Contactimg from '/Users/hwangjiyeong/Desktop/occount/default/src/image/Contact.svg'
const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-sort">
                <p className="contact-text">문의하기</p>
                <img src={Contactimg} alt="Contactimg" />
            </div>
        </div>
    );
}
export default Contact;