import * as React from 'react';
import { StyledInput } from './search.styled';

interface SearchComponentProps {
  loading: boolean;
  handleSearch: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchComponent: React.FunctionComponent<SearchComponentProps> = ({
  loading,
  handleSearch,
  handleChange,
}) => (
  <>
    <form onSubmit={handleSearch}>
      <StyledInput onChange={handleChange} disabled={loading} />
    </form>
  </>
);
