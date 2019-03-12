import * as React from 'react';
import { StyledContainer } from './app.container.styled';
import { NavigationBar, ContentContainer } from './components';

interface AppProps {}

export const App: React.FunctionComponent<AppProps> = () => (
  <StyledContainer>
    <NavigationBar />
    <ContentContainer />
  </StyledContainer>
);
