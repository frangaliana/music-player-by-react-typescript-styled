import * as React from 'react';
import { ActionPlayerContainer, ElementContainer } from './action-player.styled';
import { SVGLoader } from '../../../../core/components';
import { PlayerAction } from '../song-player.model';

interface ActionPlayerProps {
  isFirst: boolean;
  isLast: boolean;
  previewUrl: string;
  onClickPlayer: (action: string) => void;
}

export const ActionPlayer: React.FunctionComponent<ActionPlayerProps> = ({
  previewUrl,
  isFirst,
  isLast,
  onClickPlayer,
}) => {
  const handleClick = (action: keyof PlayerAction) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let audio = new Audio(previewUrl);

    if (action === 'play') {
      audio.play();
    } else if (action === 'pause') {
      audio.pause();
    } else {
      onClickPlayer(action);
    }
  };

  const previousSrc = isFirst
    ? require('../../../../assets/images/player_previous_disabled.svg')
    : require('../../../../assets/images/player_previous_enabled.svg');

  const nextSrc = isLast
    ? require('../../../../assets/images/player_next_disabled.svg')
    : require('../../../../assets/images/player_next_enabled.svg');

  return (
    <ActionPlayerContainer>
      <ElementContainer onClick={handleClick('previous')} disabled={isFirst}>
        <SVGLoader imageSrc={previousSrc} />
      </ElementContainer>
      <ElementContainer onClick={handleClick('play')}>
        <SVGLoader imageSrc={require('../../../../assets/images/player_play.svg')} />
      </ElementContainer>
      <ElementContainer onClick={handleClick('pause')}>
        <SVGLoader imageSrc={require('../../../../assets/images/player_pause.svg')} />
      </ElementContainer>
      <ElementContainer onClick={handleClick('next')} disabled={isLast}>
        <SVGLoader imageSrc={nextSrc} />
      </ElementContainer>
    </ActionPlayerContainer>
  );
};
