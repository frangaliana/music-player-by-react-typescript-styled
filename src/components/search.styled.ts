import styled from '../styled-components';
import { SearchComponent } from './search.component';

export const StyledSearch = styled(SearchComponent)``;

export const StyledInput = styled.input`
  background: url(${require('../assets/images/search-bar.svg')}) no-repeat scroll 0.5rem 0.4rem;
  background-color: ${({ theme }) => theme.palette.searchBackground};
  border-radius: 1rem;
  border: none;
  padding-left: 2.5rem;
  width: 15rem;
  height: 2.1rem;
  color: ${({ theme }) => theme.palette.textColor};
  &:focus {
    outline: none;
  }
`;
