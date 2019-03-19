import { createGlobalStyle } from './styled-components';

export const theme = {
  palette: {
    primaryColor: '#FF5018',
    secondaryColor: '#252729',
    backgroundColor: '#1A1C1E',
    hoverColor: '#202224',
    textColor: 'white',
    secondaryTextColor: '#ff5018',
    tertiaryTextColor: '#6c7278',
    searchBackground: '#D94414',
  },
  fonts: {
    size: {
      header: '3rem',
    },
  },
};

export type Theme = typeof theme;

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    margin: 0;
    background: ${({ theme }) => theme.palette.backgroundColor};
  }
`;
