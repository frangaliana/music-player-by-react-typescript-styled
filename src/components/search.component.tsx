import * as React from 'react';
import { StyledInput } from './search.styled';

interface SearchComponentProps {
  initialSearch: string;
  loading: boolean;
  onSearchInputUpdated: (newSearch: string) => void;
}

export const SearchComponent: React.FunctionComponent<SearchComponentProps> = ({
  initialSearch,
  loading,
  onSearchInputUpdated,
}) => {
  const [editedSearch, setEditedSearch] = React.useState(initialSearch);
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
