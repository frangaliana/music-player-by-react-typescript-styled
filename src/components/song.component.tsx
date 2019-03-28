import * as React from 'react';
import { Song } from '../models';
import { SongDetailsComponent } from './song-detail.component';
import { SongPlayerComponent } from './song-player.component';
import { StyledSongContainer } from './song.styled';
import { PlayerAction } from '../models/player-action.model';

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
