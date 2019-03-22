import styled from '../styled-components';
import { SongContainer } from './song.component';

interface StyledSongContainerProps {
  songContainer: SongContainer;
}

export const StyledSongContainer = styled.div<StyledSongContainerProps>`
  display: grid;
  width: 100%;
  grid-template-areas: ${({ songContainer }) => `"${songContainer.songDetails}" "${songContainer.songPlayer}"`};
  grid-template-rows: 1fr 9rem;
`;
