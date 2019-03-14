import * as React from 'react';
import { StyledTitle } from './navigation-bar.styled';
import { StyledSearch } from './search.styled';

interface NavigationBarProps {
  title: string;
}

export const NavigationBar: React.FunctionComponent<NavigationBarProps> = ({ title }) => (
  <>
    <StyledTitle>{title}</StyledTitle>
    <StyledSearch />
  </>
);
