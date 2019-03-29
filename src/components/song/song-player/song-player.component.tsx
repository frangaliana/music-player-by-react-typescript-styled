import * as React from 'react';
import { SongContainer } from '../song.component';
import {
  ActionPlayerContainer,
  ElementContainer,
  SocialNetworksContainer,
  SongPlayerContainer,
} from './song-player.styled';
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
  const onClickPlayer = (action: keyof PlayerAction) => (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    handlePlayer(action, song);
  };

  return (
    <SongPlayerContainer songContainer={songContainer}>
      <ActionPlayerContainer>
        <ElementContainer onClick={onClickPlayer('previous')}>
          <embed src={require('../../../assets/images/player_previous_enabled.svg')} />
        </ElementContainer>
        <ElementContainer onClick={onClickPlayer('play')}>
          <embed src={require('../../../assets/images/player_play.svg')} />
        </ElementContainer>
        <ElementContainer onClick={onClickPlayer('next')}>
          <embed src={require('../../../assets/images/player_next_enable.svg')} />
        </ElementContainer>
      </ActionPlayerContainer>

      <SocialNetworksContainer>
        <ElementContainer>
          <embed src={require('../../../assets/images/share_twitter.svg')} />
        </ElementContainer>
        <ElementContainer>
          <embed src={require('../../../assets/images/share_facebook.svg')} />
        </ElementContainer>
        <ElementContainer>
          <embed src={require('../../../assets/images/share_whatsapp.svg')} />
        </ElementContainer>
      </SocialNetworksContainer>
    </SongPlayerContainer>
  );
};
