import React from "react";
import { PanelProps } from "@grafana/data";
import { SimpleOptions } from "types";
import {
  CheckboxPanelContainer,
  RadioPanelContainer,
  SwitchPanelContainer,
} from "containers";
import styled from "styled-components";

interface Props extends PanelProps<SimpleOptions> {}

export const RootPanel: React.FC<Props> = () => {
  const items = 
  return (
    <StyledContainer>
      <SwitchPanelContainer />
      <RadioPanelContainer />
      <CheckboxPanelContainer />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
`;
