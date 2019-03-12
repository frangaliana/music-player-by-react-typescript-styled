import * as React from 'react';
import { StyledContainer, NavigationBarStyled, ContentContainerStyled } from './search-layout.styled';

interface AppProps {
  navigationBar: JSX.Element;
  content: JSX.Element;
}

export const SearchLayout: React.FunctionComponent<AppProps> = ({ navigationBar, content }) => (
  <StyledContainer>
    <NavigationBarStyled>{navigationBar}</NavigationBarStyled>
    <ContentContainerStyled>{content}</ContentContainerStyled>
  </StyledContainer>
);
