import React from "react";
import './ChargeExpModal.css';

const ChargeExpModal = ({ isOpen, onClose, children }) =>{
    if (!isOpen) return null;
    return (
        <>
            <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
                <button onClick={onClose}>닫기</button>
            </div>
        </div>
        </>
    );
}

export default ChargeExpModal;