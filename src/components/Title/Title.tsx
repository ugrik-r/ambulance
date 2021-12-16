import React from 'react';
import { TitleStyled } from './Title.styled';
import { TitleProps } from './types';

const Title: React.FC <TitleProps> = ({
  children, variant, level = 1,
}) => (
  <TitleStyled variant={variant} level={level} as={`h${level}` as const}>
    {children}
  </TitleStyled>
);

export default Title;
