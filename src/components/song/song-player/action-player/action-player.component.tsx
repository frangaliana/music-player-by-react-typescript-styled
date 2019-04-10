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

interface playItem {
  playAction: keyof PlayerAction;
  playSrc: string;
}

export const ActionPlayer: React.FunctionComponent<ActionPlayerProps> = ({
  previewUrl,
  isFirst,
  isLast,
  onClickPlayer,
}) => {
  const [audio, setAudio] = React.useState(null);
  const [playing, setPlaying] = React.useState(false);

  React.useEffect(() => {
    setAudio(new Audio(previewUrl));
  }, [previewUrl]);

  const handleClick = (action: keyof PlayerAction) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (action === 'play') {
      audio.play();
      setPlaying(true);
    } else if (action === 'pause') {
      audio.pause();
      setPlaying(false);
    } else {
      audio.pause();
      setAudio(null);
      setPlaying(false);
      onClickPlayer(action);
    }
  };

  const previousSrc = isFirst
    ? require('../../../../assets/images/player_previous_disabled.svg')
    : require('../../../../assets/images/player_previous_enabled.svg');

  const nextSrc = isLast
    ? require('../../../../assets/images/player_next_disabled.svg')
    : require('../../../../assets/images/player_next_enabled.svg');

  const playItem: playItem = playing
    ? { playAction: 'pause', playSrc: require('../../../../assets/images/player_pause.svg') }
    : { playAction: 'play', playSrc: require('../../../../assets/images/player_play.svg') };

  return (
    <ActionPlayerContainer>
      <ElementContainer onClick={handleClick('previous')} disabled={isFirst}>
        <SVGLoader imageSrc={previousSrc} />
      </ElementContainer>
      <ElementContainer onClick={handleClick(playItem.playAction)}>
        <SVGLoader imageSrc={playItem.playSrc} />
      </ElementContainer>
      <ElementContainer onClick={handleClick('next')} disabled={isLast}>
        <SVGLoader imageSrc={nextSrc} />
      </ElementContainer>
    </ActionPlayerContainer>
  );
};
