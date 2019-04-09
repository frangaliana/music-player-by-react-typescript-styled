import * as react from 'react';
import { ActionPlayerContainer } from './action-player.styled';
import { SVGLoader } from '../../../../core/components';

interface ActionPlayerProps {
  onClickPlayer: (action: string) => void;
}

export const ActionPlayer: React.FunctionComponent<ActionPlayerProps> = props => {
  const handleClick = (action: keyof PlayerAction) => (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClickPlayer(action);
  };

  const previousSrc = isFirst
    ? '../../../assets/images/player_previous_disabled.svg'
    : '../../../assets/images/player_previous_enabled.svg';

  const nextSrc = isLast
    ? '../../../assets/images/player_previous_disabled.svg'
    : '../../../assets/images/player_previous_enabled.svg';

  return (
    <ActionPlayerContainer>
      <ElementContainer onClick={handleClick('previous')}>
        <SVGLoader imageSrc={require(previousSrc)} />
      </ElementContainer>
      <ElementContainer onClick={handleClick('play')}>
        <SVGLoader imageSrc={require('../../../assets/images/player_play.svg')} />
      </ElementContainer>
      <ElementContainer onClick={handleClick('next')}>
        <SVGLoader imageSrc={require(nextSrc)} />
      </ElementContainer>
    </ActionPlayerContainer>
  );
};
