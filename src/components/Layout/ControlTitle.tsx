import React, { FC } from "react";
import styled from "styled-components";

export const ControlTitle: FC = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
const StyledContainer = styled.div`
  font-size: 25px;
  text-align: center;
  margin-bottom: 20px;
`;
