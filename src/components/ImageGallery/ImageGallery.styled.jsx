import styled from 'styled-components';

export const GalleryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
  max-width: calc(100vw - 48px);
  margin: 0 auto;
  padding: 0;
  list-style: none;
`;



