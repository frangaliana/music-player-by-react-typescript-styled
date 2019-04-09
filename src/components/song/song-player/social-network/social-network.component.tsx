import * as react from 'react';
import { SocialNetworksContainer, ElementContainer } from './social-network.styled';

interface SocialNetworkProps {
  onClickSocialNetwork: (action: string) => void;
}

export const SocialNetwork: React.FunctionComponent<SocialNetworkProps> = props => {
  const handleClick = (action: keyof PlayerAction) => (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {};

  return (
    <SocialNetworksContainer>
      <ElementContainer>
        <SVGLoader imageSrc={require('../../../assets/images/share_twitter.svg')} />
      </ElementContainer>
      <ElementContainer>
        <SVGLoader imageSrc={require('../../../assets/images/share_facebook.svg')} />
      </ElementContainer>
      <ElementContainer>
        <SVGLoader imageSrc={require('../../../assets/images/share_whatsapp.svg')} />
      </ElementContainer>
    </SocialNetworksContainer>
  );
};
