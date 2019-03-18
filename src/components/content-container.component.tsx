import * as React from 'react';
import { StyledTitle, StyledCenterContainer } from './content-container.styled';

interface ContentContainerProps {
  songs: Array<any>;
}

export const ContentContainer: React.FunctionComponent<ContentContainerProps> = ({ songs }) => {
  const result =
    songs.length === 0 ? (
      <StyledCenterContainer>
        <img src={require('../assets/images/empty-search.svg')} alt="Empty search" />
        <StyledTitle>{'Use the search bar to find songs'}</StyledTitle>
      </StyledCenterContainer>
    ) : null;

  return <>{result}</>;
};
