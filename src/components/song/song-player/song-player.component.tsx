import * as React from 'react';
import { SongContainer } from '../song.component';
import { SongPlayerContainer } from './song-player.styled';
import { PlayerAction } from './song-player.model';
import { Song } from '../song.model';

interface SongPlayerProps {
  songContainer: SongContainer;
  song: Song;
  handlePlayer: (action: keyof PlayerAction, song: Song) => void;
}

export const SongPlayerComponent: React.FunctionComponent<SongPlayerProps> = ({
  songContainer,
  song,
  handlePlayer,
}) => {
  const onClickPlayer = (action: string) => handlePlayer(action, song);
  const onClickNetwork = () => null;

  return (
    <SongPlayerContainer songContainer={songContainer}>
      <ActionPlayer onClickPlayer={onClickPlayer} />
      <SocialNetwork onClickSocialNetwork={onClickNetwork} />
    </SongPlayerContainer>
  );
};
