import { CheckboxControl } from "components/CheckboxControl";
import { ControlTitle, ControlWrap } from "components/Layout";
import React, { FC } from "react";

export const CheckboxPanelContainer: FC = () => {
  const onChange = () => {};

  return (
    <ControlWrap>
      <ControlTitle>Radio Control</ControlTitle>
      <CheckboxControl onChange={onChange}>name1</CheckboxControl>
      <CheckboxControl onChange={onChange}>name2</CheckboxControl>
      <CheckboxControl onChange={onChange}>name3</CheckboxControl>
    </ControlWrap>
  );
};
