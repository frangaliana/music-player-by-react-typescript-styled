import * as React from 'react';

import { StyledSearch } from './search.styled';
import { StyledHeader } from './navigation-bar.styled';

interface NavigationBarProps {
  title: string;
  handleSearch: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NavigationBar: React.FunctionComponent<NavigationBarProps> = ({ title, handleChange, handleSearch }) => (
  <>
    <StyledHeader>{title}</StyledHeader>
    <StyledSearch handleChange={handleChange} handleSearch={handleSearch} />
  </>
);
