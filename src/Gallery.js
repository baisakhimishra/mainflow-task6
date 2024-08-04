// src/Gallery.js
import React, { useState } from 'react';
import Modal from './Modal';
import './Gallery.css';

const images = [
  { id: 1, src: 'https://via.placeholder.com/300/FF5733/FFFFFF?text=Image+1' },
  { id: 2, src: 'https://via.placeholder.com/300/33FF57/FFFFFF?text=Image+2' },
  { id: 3, src: 'https://via.placeholder.com/300/3357FF/FFFFFF?text=Image+3' },
  { id: 4, src: 'https://via.placeholder.com/300/FF33A1/FFFFFF?text=Image+4' },
  { id: 5, src: 'https://via.placeholder.com/300/FFFF33/FFFFFF?text=Image+5' },
  { id: 6, src: 'https://via.placeholder.com/300/33FFFF/FFFFFF?text=Image+6' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt={`Gallery Image ${image.id}`}
          onClick={() => openModal(image.src)}
          className="gallery-image"
        />
      ))}
      {selectedImage && <Modal selectedImage={selectedImage} closeModal={closeModal} />}
    </div>
  );
};

export default Gallery;