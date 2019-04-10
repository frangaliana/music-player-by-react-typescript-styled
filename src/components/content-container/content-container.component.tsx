import * as React from 'react';
import {
  StyledTitle,
  StyledCenterContainer,
  StyledSongsTableContainer,
  DotWrapper,
  Dot,
} from './content-container.styled';
import { SongsTable, OrderItems } from './table';
import { Song } from '../song';

interface ContentContainerProps {
  isLoading: boolean;
  search: string;
  songs: Song[];
  clickOnOrder: (orderBy: keyof OrderItems) => void;
  onClickSong: (song: Song) => void;
}

export const ContentContainer: React.FunctionComponent<ContentContainerProps> = ({
  isLoading,
  search,
  songs,
  clickOnOrder,
  onClickSong,
}) => {
  const searchResult =
    songs.length === 0 ? (
      <StyledCenterContainer>
        <img src={require('../../assets/images/empty-search.svg')} alt="Empty search" />
        <StyledTitle>{'Use the search bar to find songs'}</StyledTitle>
      </StyledCenterContainer>
    ) : (
      <StyledSongsTableContainer>
        <SongsTable search={search} songs={songs} onClickSong={onClickSong} clickOnOrder={clickOnOrder} />
      </StyledSongsTableContainer>
    );

  const result = isLoading ? (
    <StyledCenterContainer>
      <DotWrapper>
        <Dot delay="0s" />
        <Dot delay=".1s" />
        <Dot delay=".2s" />
      </DotWrapper>
    </StyledCenterContainer>
  ) : (
    searchResult
  );

  return <>{result}</>;
};
