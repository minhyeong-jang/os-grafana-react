import React, { FC } from 'react';
import { Checkbox } from 'antd';
import { ControllerItemLabel, ControllerItemWrap } from './ItemStyle';

interface Props {
  label: string;
  isChecked: boolean;
  onChange(value: boolean): void;
}

export const CheckboxData: FC<Props> = ({ label, onChange, isChecked }) => {
  return (
    <>
      <ControllerItemLabel>
        <Checkbox
          checked={isChecked}
          onChange={e => onChange(e.target.checked)}
        />
      </ControllerItemLabel>
      <ControllerItemWrap>{label}</ControllerItemWrap>
    </>
  );
};
