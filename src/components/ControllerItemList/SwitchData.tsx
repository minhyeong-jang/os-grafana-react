import React, { FC } from 'react';
import { Switch } from 'antd';
import { ControllerItemLabel, ControllerItemWrap } from './ItemStyle';

interface Props {
  label: string;
  isChecked: boolean;
  onChange(value: boolean): void;
}

export const SwitchData: FC<Props> = ({ label, onChange, isChecked }) => {
  return (
    <>
      <ControllerItemLabel>{label}</ControllerItemLabel>
      <ControllerItemWrap>
        <Switch checked={isChecked} onChange={onChange} />
      </ControllerItemWrap>
    </>
  );
};
