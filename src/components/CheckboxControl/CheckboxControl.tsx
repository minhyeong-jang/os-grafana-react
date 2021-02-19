import { Checkbox } from "@grafana/ui";
import { ControlTitle, ControlWrap } from "components/Layout";
import React, { FC } from "react";
import styled from "styled-components";

export const CheckboxControl: FC = () => {
  return (
    <ControlWrap>
      <ControlTitle>Radio</ControlTitle>
      <Checkbox css={{}} label='name1' value={true} />
      <Checkbox css={{}} label='name2' value={true} />
      <Checkbox css={{}} label='name3' value={true} />
    </ControlWrap>
  );
};
const StyledContainer = styled.div``;
