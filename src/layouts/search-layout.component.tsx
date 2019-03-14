import * as React from 'react';
import { StyledContainer, StyledNavigationBar, StyledContentContainer } from './search-layout.styled';

interface AppProps {
  navigationBar: JSX.Element;
  content: JSX.Element;
}

export const SearchLayout: React.FunctionComponent<AppProps> = ({ navigationBar, content }) => (
  <StyledContainer>
    <StyledNavigationBar>{navigationBar}</StyledNavigationBar>
    <StyledContentContainer>{content}</StyledContentContainer>
  </StyledContainer>
);
