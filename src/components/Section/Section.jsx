import React from 'react';
import { SectionWrap, SectionTitle } from './section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionWrap>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrap>
  );
};

export default Section;
