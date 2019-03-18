import * as React from 'react';
import { StyledInput } from './search.styled';

interface SearchComponentProps {
  initialSearchInput: string;
  loading: boolean;
  onSearchInputUpdated: (newSearch: string) => void;
}

export const SearchComponent: React.FunctionComponent<SearchComponentProps> = ({
  initialSearchInput,
  loading,
  onSearchInputUpdated,
}) => {
  const [editedSearch, setEditedSearch] = React.useState(initialSearchInput);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setEditedSearch(event.target.value);

  const handleSearch = () => onSearchInputUpdated(editedSearch);

  return (
    <>
      <form onSubmit={handleSearch}>
        <StyledInput onChange={handleChange} disabled={loading} value={editedSearch} />
      </form>
    </>
  );
};
