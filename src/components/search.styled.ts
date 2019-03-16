import styled from 'styled-components';
import { SearchComponent } from './search.component';
import { Theme } from '../app.theme';

type StyledProps = Theme & {};

export const StyledSearch = styled(SearchComponent)``;

export const StyledInput = styled.input<StyledProps>`
  background: url(${require('../assets/images/search-bar.svg')}) no-repeat scroll 0.5rem 0.4rem;
  background-color: ${props => props.searchBackground};
  border-radius: 1rem;
  border: none;
  padding-left: 2.5rem;
  width: 15rem;
  height: 2.1rem;
  color: ${props => props.textColor};
  &:focus {
    outline: none;
  }
`;
