import styled from 'styled-components';

export const ButtonLoadMore = styled.button`
  padding: 10px 20px;
  margin-top: 40px;
  border-radius: 8px;
  background-color: linear-gradient(to right, #3498db, #2ecc71); /* Градієнт від синього до зеленого */
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #333; /* Темний колір тексту */
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0 0 5px 0.1px #464748;

  &:hover {
    background: linear-gradient(to right, #3498db, #2ecc71);
    transform: scale(1.1); /* Збільшення елементу при наведенні */
  }

`;
