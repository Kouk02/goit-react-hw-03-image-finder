import React, { Component } from 'react';
import { GalleryItem, GalleryImage } from './imageGalleryItem.styled.jsx';
import Modal from 'components/Modal/modal.jsx';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { image } = this.props;

    return (
      <GalleryItem className="gallery-item">
        <GalleryImage
          src={image.webformatURL}
          alt={image.tags}
          onClick={this.toggleModal}
        />
        {this.state.showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImageURL={image.largeImageURL}
            tags={image.tags}
          />
        )}
      </GalleryItem>
    );
  }
}
