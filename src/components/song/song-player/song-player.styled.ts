import styled from '../../../styled-components';
import { SongContainer } from '../song.component';

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
