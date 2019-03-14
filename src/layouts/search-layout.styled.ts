import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: grid;
  height: 100%;
  padding: 2rem;
  grid-template-areas: 'navigation-bar-item' 'content-container-item';
  grid-template-rows: 3rem auto;
  font-family: 'Open Sans', sans-serif;
  color: ${({ theme }) => theme.palette.textColor};
`;

export const NavigationBarStyled = styled.div`
  grid-area: navigation-bar-item;
  padding-left: 2rem;
  display: flex;
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
