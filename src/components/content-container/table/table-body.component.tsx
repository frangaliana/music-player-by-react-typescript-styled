import { format } from 'date-fns';
import * as React from 'react';
import { Song } from '../../song';
import { StyledLinkRow, StyledResultColumn } from './songs-table.styled';

interface TableBodyProps {
  songs: Song[];
  onClickSong: (song: Song) => void;
}

export const TableBody: React.FunctionComponent<TableBodyProps> = ({ songs, onClickSong }) => (
  <>
    <tbody>
      {songs.map(song => (
        <StyledLinkRow key={song.trackId} onClick={onClickSong.bind(this, song)}>
          <StyledResultColumn>
            <img src={song.artworkUrl60} />
          </StyledResultColumn>
          <StyledResultColumn isPrimary>{song.trackName}</StyledResultColumn>
          <StyledResultColumn>{song.artistName}</StyledResultColumn>
          <StyledResultColumn>{song.collectionName}</StyledResultColumn>
          <StyledResultColumn>{format(song.trackTimeMillis, 'mm:ss')}</StyledResultColumn>
          <StyledResultColumn>{song.primaryGenreName}</StyledResultColumn>
          <StyledResultColumn>{song.trackPrice}€</StyledResultColumn>
        </StyledLinkRow>
      ))}
    </tbody>
  </>
);
