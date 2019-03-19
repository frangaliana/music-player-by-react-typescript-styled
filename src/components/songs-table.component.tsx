import * as React from 'react';
import { Song } from '../models';
import {
  StyledHeaderColumn,
  StyledLinkRow,
  StyledResultColumn,
  StyledTable,
  StyledTitleSearch,
} from './songs-table.styled';
import { format } from 'date-fns';
import { TableHead } from './table-head.component';
import { TableBody } from './table-body.component';

interface SongsTableProps {
  search: string;
  songs: Song[];
}

export const SongsTable: React.FunctionComponent<SongsTableProps> = ({ search, songs }) => {
  const combinedTitle = `Searching "${search}"`;
  return (
    <>
      <StyledTitleSearch>{combinedTitle}</StyledTitleSearch>
      <StyledTable>
        <TableHead />
        <TableBody songs={songs} />
      </StyledTable>
    </>
  );
};
