import * as React from 'react';
import { Song } from '../models';
import { StyledTable, StyledTitleSearch } from './songs-table.styled';
import { TableBody } from './table-body.component';
import { TableHead } from './table-head.component';

interface SongsTableProps {
  search: string;
  songs: Song[];
  onClickSong: (song: Song) => void;
}

export const SongsTable: React.FunctionComponent<SongsTableProps> = ({ search, songs, onClickSong }) => {
  const combinedTitle = `Searching "${search}"`;
  return (
    <>
      <StyledTitleSearch>{combinedTitle}</StyledTitleSearch>
      <StyledTable>
        <TableHead />
        <TableBody songs={songs} onClickSong={onClickSong} />
      </StyledTable>
    </>
  );
};
