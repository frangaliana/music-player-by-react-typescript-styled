import styled from '../styled-components';
import { SearchComponent } from './search.component';

export const StyledSearch = styled(SearchComponent)``;

export const StyledInput = styled.input`
  height: 2.1rem;
  width: 15rem;
  padding-left: 2.5rem;
  padding-right: 0.5rem;
  border: none;
  border-radius: 1rem;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.palette.textColor};
  background: url(${require('../assets/images/search-bar.svg')}) no-repeat scroll 0.5rem 0.4rem;
  background-color: ${({ theme }) => theme.palette.searchBackground};
  &:focus {
    outline: none;
  }
`;
