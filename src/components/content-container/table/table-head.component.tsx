import * as React from 'react';
import { StyledHeaderColumn } from './songs-table.styled';

interface TableHeadProps {}

export const TableHead: React.FunctionComponent<TableHeadProps> = props => (
  <>
    <thead>
      <tr>
        <StyledHeaderColumn />
        <StyledHeaderColumn>Song</StyledHeaderColumn>
        <StyledHeaderColumn>Artist</StyledHeaderColumn>
        <StyledHeaderColumn>Album</StyledHeaderColumn>
        <StyledHeaderColumn isPrimary>Duration</StyledHeaderColumn>
        <StyledHeaderColumn isPrimary>Gender</StyledHeaderColumn>
        <StyledHeaderColumn isPrimary>Price</StyledHeaderColumn>
      </tr>
    </thead>
  </>
);
