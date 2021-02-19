import React, { FC } from "react";
import styled from "styled-components";

export const ControlWrap: FC = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
const StyledContainer = styled.div`
  flex: 1 1 33%;
  padding: 20px;
  background-color: white;
  margin: 30px;
`;
