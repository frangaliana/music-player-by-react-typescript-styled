import * as React from 'react';

import { SearchComponent } from './search.component';
import { StyledHeader } from './navigation-bar.styled';

interface NavigationBarProps {
  title: string;
  initialSearchInput: string;
  loading: boolean;
  onSearchInputUpdated: (newSearch: string) => void;
}

export const NavigationBar: React.FunctionComponent<NavigationBarProps> = ({
  title,
  initialSearchInput,
  loading,
  onSearchInputUpdated,
}) => (
  <>
    <StyledHeader>{title}</StyledHeader>
    <SearchComponent
      initialSearchInput={initialSearchInput}
      loading={loading}
      onSearchInputUpdated={onSearchInputUpdated}
    />
  </>
);
