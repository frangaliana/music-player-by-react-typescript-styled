import styled from '../styled-components';
import { StyledTitle } from './content-container.styled';

export const StyledTitleSearch = styled(StyledTitle)`
  padding-left: 2rem;
`;

export const StyledTable = styled.table`
  border-spacing: 0;
`;

interface StyledHeaderColumnProps {
  isPrimary?: boolean;
}

export const StyledHeaderColumn = styled.th<StyledHeaderColumnProps>`
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
