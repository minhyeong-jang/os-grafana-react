import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  onModal(): void;
}
export const ModalButton: FC<Props> = ({ onModal, children }) => {
  return (
    <StyledAddButton onClick={() => onModal()}>{children}</StyledAddButton>
  );
};
const StyledAddButton = styled.button`
  ${({ theme }) => theme.button.defaultButton};
  width: 100%;
  margin: 10px 0px;
`;
