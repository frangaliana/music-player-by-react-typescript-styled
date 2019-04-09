import * as React from 'react';
import { SocialNetworksContainer } from './social-network.styled';
import { PlayerAction } from '../song-player.model';
import { ElementContainer } from '../action-player/action-player.styled';
import { SVGLoader } from '../../../../core/components';

interface SocialNetworkProps {
  onClickSocialNetwork: (action: string) => void;
}

export const SocialNetwork: React.FunctionComponent<SocialNetworkProps> = props => {
  const handleClick = (action: keyof PlayerAction) => (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {};

  return (
    <SocialNetworksContainer>
      <ElementContainer>
        <SVGLoader imageSrc={require('../../../../assets/images/share_twitter.svg')} />
      </ElementContainer>
      <ElementContainer>
        <SVGLoader imageSrc={require('../../../../assets/images/share_facebook.svg')} />
      </ElementContainer>
      <ElementContainer>
        <SVGLoader imageSrc={require('../../../../assets/images/share_whatsapp.svg')} />
      </ElementContainer>
    </SocialNetworksContainer>
  );
};
