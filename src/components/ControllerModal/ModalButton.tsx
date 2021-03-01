import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  onModal(): void;
}
export const ModalButton: FC<Props> = ({ onModal }) => {
  return (
    <StyledAddButton onClick={() => onModal()}>컨트롤러 추가</StyledAddButton>
  );
};
const StyledAddButton = styled.button`
  ${({ theme }) => theme.button.defaultButton};
  width: 100%;
  margin: 10px 0px;
`;
