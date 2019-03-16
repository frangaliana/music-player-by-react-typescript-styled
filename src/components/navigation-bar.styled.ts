import styled from 'styled-components';
import { Theme } from '../app.theme';

type StyledProps = Theme & {};

export const StyledTitle = styled.h1<StyledProps>`
  font-size: ${props => props.headerFontSize};
  font-weight: bold;
`;
