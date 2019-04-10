import * as React from 'react';
import { StyledHeaderColumn } from './songs-table.styled';

export interface OrderItems {
  trackName: string;
  artistName: string;
  collectionName: string;
  trackTimeMillis: number;
  primaryGenreName: string;
  trackPrice: number;
}

interface TableHeadProps {
  clickOnOrder: (orderBy: keyof OrderItems) => void;
}

export const TableHead: React.FunctionComponent<TableHeadProps> = ({ clickOnOrder }) => {
  const handleClick = (orderBy: keyof OrderItems) => (
    event: React.MouseEvent<HTMLTableHeaderCellElement, MouseEvent>
  ) => {
    clickOnOrder(orderBy);
  };

  return (
    <>
      <thead>
        <tr>
          <StyledHeaderColumn noPointer />
          <StyledHeaderColumn onClick={handleClick('trackName')}>Song</StyledHeaderColumn>
          <StyledHeaderColumn onClick={handleClick('artistName')}>Artist</StyledHeaderColumn>
          <StyledHeaderColumn onClick={handleClick('collectionName')}>Album</StyledHeaderColumn>
          <StyledHeaderColumn onClick={handleClick('trackTimeMillis')} isPrimary>
            Duration
          </StyledHeaderColumn>
          <StyledHeaderColumn onClick={handleClick('primaryGenreName')} isPrimary>
            Gender
          </StyledHeaderColumn>
          <StyledHeaderColumn onClick={handleClick('trackPrice')} isPrimary>
            Price
          </StyledHeaderColumn>
        </tr>
      </thead>
    </>
  );
};
