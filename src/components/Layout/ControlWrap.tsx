import React, { FC } from "react";
import styled from "styled-components";

export const ControlWrap: FC = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
const StyledContainer = styled.div`
  flex: 1 1 25%;
  padding: 20px;
  background-color: #fff;
  color: #111111;
  border-radius: 5px;
`;
