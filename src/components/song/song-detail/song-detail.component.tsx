import * as React from 'react';
import { SongDetailsContainer, StyledTrackImage, StyledTrackName, StyledCollectionName } from './song-detail.styled';
import { SongContainer } from '../song.component';
import { Song } from '../song.model';

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
