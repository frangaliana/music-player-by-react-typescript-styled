import * as React from 'react';
import { SongContainer } from '../song.component';
import { SongPlayerContainer } from './song-player.styled';
import { PlayerAction } from './song-player.model';
import { Song } from '../song.model';
import { ActionPlayer } from './action-player/action-player.component';
import { SocialNetwork } from './social-network/social-network.component';

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
  const onClickPlayer = (action: keyof PlayerAction) => handlePlayer(action, song);
  const onClickNetwork = () => null;

  return (
    <SongPlayerContainer songContainer={songContainer}>
      <ActionPlayer isFirst={song.isFirst} isLast={song.isLast} onClickPlayer={onClickPlayer} />
      <SocialNetwork onClickSocialNetwork={onClickNetwork} />
    </SongPlayerContainer>
  );
};
