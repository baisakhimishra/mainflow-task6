// src/Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ selectedImage, closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={selectedImage} alt="Selected" className="modal-image" />
        <button className="close-button" onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;