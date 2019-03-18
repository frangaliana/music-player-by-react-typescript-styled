import * as React from 'react';

import { SearchComponent } from './search.component';
import { StyledHeader } from './navigation-bar.styled';

interface NavigationBarProps {
  title: string;
  loading: boolean;
  handleSearch: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NavigationBar: React.FunctionComponent<NavigationBarProps> = ({
  title,
  loading,
  handleChange,
  handleSearch,
}) => (
  <>
    <StyledHeader>{title}</StyledHeader>
    <SearchComponent loading={loading} handleChange={handleChange} handleSearch={handleSearch} />
  </>
);
