import { Button } from 'antd';
import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  onModal(): void;
}
export const ModalButton: FC<Props> = ({ onModal }) => {
  return (
    <StyledAddButton type="primary" onClick={() => onModal()}>
      컨트롤러 추가
    </StyledAddButton>
  );
};
const StyledAddButton = styled(Button)`
  width: 100%;
  margin: 10px 0px 20px 0px;
`;
