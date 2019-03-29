import styled, { keyframes } from '../../styled-components';

export const StyledCenterContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  font-weight: lighter;
`;

export const StyledSongsTableContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;
export const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

interface DotProps {
  delay: string;
}

export const Dot = styled.div<DotProps>`
  background-color: ${({ theme }) => theme.palette.secondaryTextColor};
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 1rem;
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${({ delay }) => delay};
`;
