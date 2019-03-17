import * as React from 'react';
import { StyledTitle, StyledCenterContainer } from './content-container.styled';
import styled from 'styled-components';

export const ContentContainer: React.FunctionComponent = props => {
  const result = (
    <StyledCenterContainer>
      <img src={require('../assets/images/empty-search.svg')} alt="Empty search" />
      <StyledTitle>{'Use the search bar to find songs'}</StyledTitle>
    </StyledCenterContainer>
  );

  return <>{result}</>;
};
