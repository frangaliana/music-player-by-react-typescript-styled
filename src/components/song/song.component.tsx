import * as React from 'react';
import { SongDetailsComponent } from './song-detail';
import { SongPlayerComponent, PlayerAction } from './song-player';
import { StyledSongContainer } from './song.styled';
import { Song } from './song.model';

export interface SongContainer {
  songDetails: string;
  songPlayer: string;
}

interface SongComponentProps {
  song: Song;
  handlePlayer: (action: keyof PlayerAction, song: Song) => void;
}

const songContainer: SongContainer = {
  songDetails: 'song-details-item',
  songPlayer: 'song-player-item',
};

export const SongComponent: React.FunctionComponent<SongComponentProps> = ({ song, handlePlayer }) => {
  return (
    <StyledSongContainer songContainer={songContainer}>
      <SongDetailsComponent songContainer={songContainer} song={song} />
      <SongPlayerComponent songContainer={songContainer} song={song} handlePlayer={handlePlayer} />
    </StyledSongContainer>
  );
};
