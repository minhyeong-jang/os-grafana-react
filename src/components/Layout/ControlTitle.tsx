import React, { FC } from "react";
import styled from "styled-components";

export const ControlTitle: FC = () => {
  return <StyledContainer>Select Control</StyledContainer>;
};
const StyledContainer = styled.div`
  font-size: 25px;
  text-align: center;
  margin-bottom: 20px;
`;
