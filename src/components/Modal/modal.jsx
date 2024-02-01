import React, { useEffect, useState } from 'react';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const Modal = ({ largeImageURL, tags, onClose }) => {
  const [lightboxInstance, setLightboxInstance] = useState(null);

  useEffect(() => {
    const instance = basicLightbox.create(`
      <img src="${largeImageURL}" alt="${tags}" width="800" height="600">
    `);

    setLightboxInstance(instance);

    return () => {
      instance.close();
    };
  }, [largeImageURL, tags]);

  useEffect(() => {
    const handleKeyClose = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyClose);

    return () => {
      document.removeEventListener('keydown', handleKeyClose);
    };
  }, [onClose]);

  useEffect(() => {
    if (lightboxInstance) {
      lightboxInstance.show();
    }
  }, [lightboxInstance]);

  return <></>;
};

export default Modal;
