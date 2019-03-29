import styled from '../../../styled-components';
import { SongContainer } from '../song.component';

interface StyledSongContainerProps {
  songContainer: SongContainer;
}

export const SongDetailsContainer = styled.div<StyledSongContainerProps>`
  grid-area: ${({ songContainer }) => songContainer.songDetails};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledTrackImage = styled.img`
  box-shadow: 0px 3px 38px 1px rgba(0, 0, 0, 0.75);
  height: 19rem;
`;
export const StyledTrackName = styled.h2``;
export const StyledCollectionName = styled.h3`
  margin: 0;
  font-weight: lighter;
`;
