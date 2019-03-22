import * as React from 'react';
import { Song } from '../models';
import { SongDetailsComponent } from './song-detail.component';
import { SongPlayerComponent } from './song-player.component';
import { StyledSongContainer } from './song.styled';

export interface SongContainer {
  songDetails: string;
  songPlayer: string;
}

interface SongComponentProps {
  song: Song;
}

const songContainer: SongContainer = {
  songDetails: 'song-details-item',
  songPlayer: 'song-player-item',
};

export const SongComponent: React.FunctionComponent<SongComponentProps> = ({ song }) => {
  return (
    <StyledSongContainer songContainer={songContainer}>
      <SongDetailsComponent songContainer={songContainer} song={song} />
      <SongPlayerComponent songContainer={songContainer} song={song} />
    </StyledSongContainer>
  );
};
