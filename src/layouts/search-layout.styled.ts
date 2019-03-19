import styled from '../styled-components';

export const StyledContainer = styled.div`
  display: grid;
  height: 100%;
  padding: 4rem;
  grid-template-areas: 'navigation-bar-item' 'content-container-item';
  grid-template-rows: 6rem 40rem;
  font-family: 'Open Sans', sans-serif;
  color: ${({ theme }) => theme.palette.textColor};
`;

export const StyledNavigationBar = styled.div`
  grid-area: navigation-bar-item;
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.primaryColor};
`;

export const StyledContentContainer = styled.div`
  grid-area: content-container-item;
  display: flex;
  background-color: ${({ theme }) => theme.palette.secondaryColor};
`;
