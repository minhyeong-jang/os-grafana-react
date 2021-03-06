import React, { FC } from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import { ControllerItemLabel, ControllerItemWrap } from './ItemStyle';

interface Props {
  label: string;
  value: string;
  onChange(value: string): void;
}

export const InputData: FC<Props> = ({ label, onChange, value }) => {
  return (
    <>
      <ControllerItemLabel>{label}</ControllerItemLabel>
      <ControllerItemWrap>
        <StyledInput value={value} onChange={e => onChange(e.target.value)} />
      </ControllerItemWrap>
    </>
  );
};

const StyledInput = styled(Input)`
  ${({ theme }) => theme.input.defaultInput};
  flex: 1 1 auto;
`;
