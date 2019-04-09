import styled from '../../../../styled-components';

export const ActionPlayerContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 14rem;
`;

export const ElementContainer = styled.button`
  padding: 1rem;
  border: none;
  background: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    cursor: default;
  }
`;
