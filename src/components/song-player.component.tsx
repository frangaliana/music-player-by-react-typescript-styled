import * as React from 'react';
import { Song } from '../models';
import { SongContainer } from './song.component';
import {
  ActionPlayerContainer,
  ElementContainer,
  SocialNetworksContainer,
  SongPlayerContainer,
} from './song-player.styled';

interface SongPlayerProps {
  songContainer: SongContainer;
  song: Song;
}

export const SongPlayerComponent: React.FunctionComponent<SongPlayerProps> = ({ songContainer, song }) => (
  <SongPlayerContainer songContainer={songContainer}>
    <ActionPlayerContainer>
      <ElementContainer>
        <embed src={require('../assets/images/player_previous_enabled.svg')} />
      </ElementContainer>
      <ElementContainer>
        <embed src={require('../assets/images/player_play.svg')} />
      </ElementContainer>
      <ElementContainer>
        <embed src={require('../assets/images/player_next_enable.svg')} />
      </ElementContainer>
    </ActionPlayerContainer>

    <SocialNetworksContainer>
      <ElementContainer>
        <embed src={require('../assets/images/share_twitter.svg')} />
      </ElementContainer>
      <ElementContainer>
        <embed src={require('../assets/images/share_facebook.svg')} />
      </ElementContainer>
      <ElementContainer>
        <embed src={require('../assets/images/share_whatsapp.svg')} />
      </ElementContainer>
    </SocialNetworksContainer>
  </SongPlayerContainer>
);
