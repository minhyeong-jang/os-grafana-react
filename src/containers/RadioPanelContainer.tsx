import { ControlTitle, ControlWrap } from "components/Layout";
import { RadioControl } from "components/RadioControl";
import React, { FC } from "react";

export const RadioPanelContainer: FC = () => {
  const onChange = () => {};

  return (
    <ControlWrap>
      <ControlTitle>Radio Control</ControlTitle>
      <RadioControl value='name2' onChange={onChange} />
    </ControlWrap>
  );
};
