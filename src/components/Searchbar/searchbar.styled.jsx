import styled from 'styled-components';

export const SearchbarWrap = styled.header`
  top: 0;
  left: 0;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background: linear-gradient(to right, #3498db, #2ecc71);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;


export const SearchbarForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 450px;
  background: linear-gradient(to right, #3498db, #2ecc71); /* Gradient from blue to green */
  border-radius: 8px;
  overflow: hidden;

  &:focus-within {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }
`;



export const SearchbarButton = styled.button`
  background-color: #5e5e5e38;
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url('https://cdn-icons-png.flaticon.com/128/10469/10469570.png');
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const SearchbarSpan = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
  opacity: 0; /* Додана прозорість, щоб уникнути конфліктів у специфічних випадках */
`;



export const SearchbarInput = styled.input`
  color: #fcfcfc;
  background-color: transparent;
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
