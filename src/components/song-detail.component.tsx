import * as React from 'react';
import { Song } from '../models';
import { SongDetailsContainer, StyledTrackImage, StyledTrackName, StyledCollectionName } from './song-detail.styled';
import { SongContainer } from './song.component';

interface SongDetailsProps {
  songContainer: SongContainer;
  song: Song;
}

export const SongDetailsComponent: React.FunctionComponent<SongDetailsProps> = ({ songContainer, song }) => (
  <SongDetailsContainer songContainer={songContainer}>
    {song && (
      <>
        <StyledTrackImage src={song.artworkUrl100} />
        <StyledTrackName>{song.trackName}</StyledTrackName>
        <StyledCollectionName>{song.collectionName}</StyledCollectionName>
      </>
    )}
  </SongDetailsContainer>
);
