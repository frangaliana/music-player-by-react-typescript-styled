import * as React from 'react';

import { SearchComponent } from './search.component';
import { StyledHeader } from './navigation-bar.styled';

interface NavigationBarProps {
  title: string;
  initialSearch: string;
  loading: boolean;
  onSearchInputUpdated: (newSearch: string) => void;
  changeToHome: () => void;
}

export const NavigationBar: React.FunctionComponent<NavigationBarProps> = ({
  title,
  initialSearch,
  loading,
  onSearchInputUpdated,
  changeToHome,
}) => (
  <>
    <StyledHeader onClick={changeToHome}>{title}</StyledHeader>
    <SearchComponent initialSearch={initialSearch} loading={loading} onSearchInputUpdated={onSearchInputUpdated} />
  </>
);
