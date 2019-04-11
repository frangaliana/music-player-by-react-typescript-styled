import * as React from 'react';
import { SocialNetworksContainer } from './social-network.styled';
import { PlayerAction } from '../song-player.model';
import { ElementContainer } from '../action-player/action-player.styled';
import { SVGLoader } from '../../../../core/components';
import { Song } from '../../song.model';
import { normalizeText } from '../../../../app.business';

interface SocialNetworkProps {
  song: Song;
}

export const SocialNetwork: React.FunctionComponent<SocialNetworkProps> = ({ song }) => {
  return (
    <SocialNetworksContainer>
      <ElementContainer>
        <a
          href={`https://twitter.com/intent/tweet?text=With%20constancy%20could%20be%20a%20good%20member%20-%20RT%20for%3A%20${
            song.trackName
          }`}
          target="_blank"
        >
          <SVGLoader imageSrc={require('../../../../assets/images/share_twitter.svg')} />
        </a>
      </ElementContainer>
      <ElementContainer>
        <a href={`//www.facebook.com/sharer/sharer.php?u=https://es.linkedin.com/in/frangaliana`} target="_blank">
          <SVGLoader imageSrc={require('../../../../assets/images/share_facebook.svg')} />
        </a>
      </ElementContainer>
      <ElementContainer>
        <a
          href={`whatsapp://send?text=With constancy could be a good member - I like ${song.trackName}`}
          data-action="share/whatsapp/share"
          target="_blank"
        >
          <SVGLoader imageSrc={require('../../../../assets/images/share_whatsapp.svg')} />
        </a>
      </ElementContainer>
    </SocialNetworksContainer>
  );
};
