import { createGlobalStyle } from './styled-components';

export const theme = {
  palette: {
    primaryColor: '#FF5018',
    secondaryColor: '#252729',
    tertiaryColor: '#1A1C1E',
    textColor: 'white',
    searchBackground: '#D94414',
  },
  fonts: {
    size: {
      header: '1.5rem',
    },
  },
};

export type Theme = typeof theme;

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    margin: 0;
    background: ${({ theme }) => theme.palette.tertiaryColor};
  }
`;
