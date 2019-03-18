import * as React from 'react';
import { StyledInput } from './search.styled';

interface SearchComponentProps {}

export const SearchComponent: React.FunctionComponent<SearchComponentProps> = props => (
  <>
    <form>
      <StyledInput />
    </form>
  </>
);
