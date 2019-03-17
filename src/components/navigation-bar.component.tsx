import * as React from 'react';

import { StyledSearch } from './search.styled';
import { StyledHeader } from './navigation-bar.styled';

interface NavigationBarProps {
  title: string;
}

export const NavigationBar: React.FunctionComponent<NavigationBarProps> = ({ title }) => (
  <>
    <StyledHeader>{title}</StyledHeader>
    <StyledSearch />
  </>
);
