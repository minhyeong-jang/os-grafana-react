import { Input } from "@grafana/ui";
import { ControlTitle, ControlWrap } from "components/Layout";
import React, { FC } from "react";
import styled from "styled-components";

export const InputControl: FC = () => {
  return (
    <ControlWrap>
      <ControlTitle>Input Control</ControlTitle>
      <Input css={{}} label='name1' value={""} />
      <Input css={{}} label='name1' value={""} />
      <Input css={{}} label='name1' value={""} />
    </ControlWrap>
  );
};
const StyledContainer = styled.div``;
