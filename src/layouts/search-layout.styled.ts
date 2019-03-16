import styled from 'styled-components';
import { Theme } from '../app.theme';

type StyledProps = Theme & {};

export const StyledContainer = styled.div<StyledProps>`
  display: grid;
  height: 100%;
  padding: 4rem;
  grid-template-areas: 'navigation-bar-item' 'content-container-item';
  grid-template-rows: 6rem auto;
  font-family: 'Open Sans', sans-serif;
  color: ${props => props.textColor};
`;

export const StyledNavigationBar = styled.div<StyledProps>`
  grid-area: navigation-bar-item;
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.primaryColor};
`;

export const StyledContentContainer = styled.div<StyledProps>`
  grid-area: content-container-item;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${props => props.secondaryColor};
`;
