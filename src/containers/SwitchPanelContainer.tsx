import { ControlTitle, ControlWrap } from "components/Layout";
import { SwitchControl } from "components/SwitchControl";
import React, { FC } from "react";

export const SwitchPanelContainer: FC = () => {
  const onChange = () => {};

  return (
    <ControlWrap>
      <ControlTitle>Switch Control</ControlTitle>
      <SwitchControl label='name1' checked={true} onChange={onChange} />
      <SwitchControl label='name2' checked={false} onChange={onChange} />
      <SwitchControl label='name3' checked={true} onChange={onChange} />
    </ControlWrap>
  );
};
