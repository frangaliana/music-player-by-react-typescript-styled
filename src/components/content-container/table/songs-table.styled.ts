import styled from '../../../styled-components';

export const StyledTitleSearch = styled.h1`
  font-weight: lighter;
  padding-left: 2rem;
`;

export const StyledTable = styled.table`
  border-spacing: 0;
`;

interface StyledHeaderColumnProps {
  isPrimary?: boolean;
  noPointer?: boolean;
}

export const StyledHeaderColumn = styled.th<StyledHeaderColumnProps>`
  cursor: ${({ noPointer }) => (noPointer ? 'default' : 'pointer')};
  padding: 1rem 2rem;
  text-align: left;
  font-size: 1.2rem;
  font-weight: lighter;
  color: ${({ isPrimary, theme }) => (isPrimary ? theme.palette.secondaryTextColor : theme.palette.tertiaryTextColor)};
`;

interface StyledResultColumnProps {
  isPrimary?: boolean;
}

export const StyledResultColumn = styled.td<StyledResultColumnProps>`
  padding: 1rem 2rem;
  text-align: left;
  font-size: 1.2rem;
  font-weight: lighter;
  color: ${({ isPrimary, theme }) => (isPrimary ? theme.palette.secondaryTextColor : theme.palette.textColor)};
`;

export const StyledLinkRow = styled.tr`
  margin: 0;
  &:hover {
    background: ${({ theme }) => theme.palette.hoverColor};
    cursor: pointer;
  }
`;
