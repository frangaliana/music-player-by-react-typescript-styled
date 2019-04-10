import * as React from 'react';
import { Song } from '../../song';
import { StyledTitleSearch, StyledTable } from './songs-table.styled';
import { TableHead, OrderItems } from './table-head.component';
import { TableBody } from './table-body.component';

interface SongsTableProps {
  search: string;
  songs: Song[];
  onClickSong: (song: Song) => void;
  clickOnOrder: (orderBy: keyof OrderItems) => void;
}

export const SongsTable: React.FunctionComponent<SongsTableProps> = ({ search, songs, clickOnOrder, onClickSong }) => {
  const combinedTitle = `Searching "${search}"`;
  return (
    <>
      <StyledTitleSearch>{combinedTitle}</StyledTitleSearch>
      <StyledTable>
        <TableHead clickOnOrder={clickOnOrder} />
        <TableBody songs={songs} onClickSong={onClickSong} />
      </StyledTable>
    </>
  );
};
