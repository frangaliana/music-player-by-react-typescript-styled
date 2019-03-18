import * as React from 'react';
import { StyledInput } from './search.styled';

interface SearchComponentProps {
  handleSearch: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchComponent: React.FunctionComponent<SearchComponentProps> = ({ handleSearch, handleChange }) => (
  <>
    <form onSubmit={handleSearch}>
      <StyledInput onChange={handleChange} />
    </form>
  </>
);
