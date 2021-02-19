import { RadioButtonGroup } from "@grafana/ui";
import { RadioButton } from "@grafana/ui/components/Forms/RadioButtonGroup/RadioButton";
import { ControlTitle, ControlWrap } from "components/Layout";
import React, { FC } from "react";
import styled from "styled-components";

export const RadioControl: FC = () => {
  return (
    <ControlWrap>
      <ControlTitle>Radio Control</ControlTitle>
      <RadioButtonGroup
        options={[
          <input type='radio' id='test1' onChange={() => {}} />,
          <input type='radio' id='test2' onChange={() => {}} />,
          <input type='radio' id='test3' onChange={() => {}} />,
        ]}
      ></RadioButtonGroup>
    </ControlWrap>
  );
};
const StyledContainer = styled.div``;
