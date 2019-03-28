import styled from '../styled-components';
import { SongContainer } from './song.component';

interface StyledSongContainerProps {
  songContainer: SongContainer;
}

export const SongPlayerContainer = styled.div<StyledSongContainerProps>`
  grid-area: ${({ songContainer }) => songContainer.songPlayer};
  background: ${({ theme }) => theme.palette.secondaryBackgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ActionPlayerContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 14rem;
`;

export const SocialNetworksContainer = styled.div`
  flex: 0;
  justify-self: flex-end;
  display: flex;
  padding-right: 2rem;
`;

export const ElementContainer = styled.div`
  padding: 1rem;
  &:hover {
    cursor: pointer;
  }
`;
