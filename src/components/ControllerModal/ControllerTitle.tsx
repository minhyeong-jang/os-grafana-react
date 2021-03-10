import { Input } from 'antd';
import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { ModalItemWrap, ModalItemLabel } from './ModalStyle';

interface Props {
  title: string;
  onChange(value: string): void;
}
const ControllerTitleComponent: FC<Props> = ({ title, onChange }) => {
  return (
    <ModalItemWrap>
      <ModalItemLabel>타이틀 :</ModalItemLabel>
      <StyledInput value={title} onChange={e => onChange(e.target.value)} />
    </ModalItemWrap>
  );
};

const StyledInput = styled(Input)`
  ${({ theme }) => theme.input.defaultInput};
  width: 180px;
`;

export const ControllerTitle = memo(ControllerTitleComponent);
