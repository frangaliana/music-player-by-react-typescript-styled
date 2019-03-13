import styled from 'styled-components';
import { Theme } from '../app.theme';

export const StyledContainer = styled.div`
  display: grid;
  padding: 1.5rem;
  grid-template-areas: 'navigation-bar-item' 'content-container-item';
  grid-template-rows: 3rem auto;
  font-family: 'Open Sans', sans-serif;
  color: ${({ theme }) => theme.palette.textColor};
  background-color: ${({ theme }) => theme.palette.tertiaryColor};
`;

export const NavigationBarStyled = styled.div`
  grid-area: navigation-bar-item;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.primaryColor};
`;

export const ContentContainerStyled = styled.div`
  grid-area: content-container-item;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.secondaryColor};
`;
