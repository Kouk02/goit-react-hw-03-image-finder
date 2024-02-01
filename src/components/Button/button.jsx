import React from 'react';
import { ButtonLoadMore } from './button.styled.jsx';


function Button({ onClick }) {
  return (
    <ButtonLoadMore type="button" onClick={onClick}>
      Load More
    </ButtonLoadMore>
  );
}



export default Button;
