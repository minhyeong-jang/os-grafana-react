import { CheckboxControl } from "components/CheckboxControl";
import { RadioControl } from "components/RadioControl";
import React, { FC } from "react";
import styled from "styled-components";

export const ControlPanelContainer: FC = () => {
  return (
    <StyledContainer>
      <RadioControl />
      <CheckboxControl />
    </StyledContainer>
  );
};
const StyledContainer = styled.div`
  display: flex;
`;
