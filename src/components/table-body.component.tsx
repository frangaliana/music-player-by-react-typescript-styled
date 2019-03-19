import * as React from 'react';
import { StyledLinkRow, StyledResultColumn } from './songs-table.styled';
import { format } from 'date-fns';
import { Song } from '../models';

interface TableBodyProps {
  songs: Song[];
}

export const TableBody: React.FunctionComponent<TableBodyProps> = ({ songs }) => (
  <>
    <tbody>
      {songs.map(song => (
        <StyledLinkRow key={song.trackId} onClick={null}>
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
