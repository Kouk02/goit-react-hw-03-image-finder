import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/imageGalleryItem';
import { GalleryList } from './imageGallery.styled';

const ImageGallery = ({ images }) => {
  return (
    <GalleryList className="gallery">
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </GalleryList>
  );
};

export default ImageGallery;
