import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: grid;
  grid-template-areas: 'navigation-bar-item' 'content-container-item';
  grid-template-rows: 3em auto;
`;

export const NavigationBarStyled = styled.div`
  grid-area: navigation-bar-item;
`;

export const ContentContainerStyled = styled.div`
  grid-area: content-container-item;
`;
