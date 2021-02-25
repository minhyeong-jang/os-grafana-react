import React, { FC } from "react";
import { Switch } from "antd";
import { ControllerItemLabel, ControllerItemWrap } from "./ItemStyle";

interface Props {
  label: string;
  isChecked: boolean;
  onChange(): void;
}

export const SwitchData: FC<Props> = ({ label, onChange, isChecked }) => {
  return (
    <ControllerItemWrap>
      <ControllerItemLabel>{label} : </ControllerItemLabel>
      <Switch checked={isChecked} onChange={onChange} />
    </ControllerItemWrap>
  );
};
