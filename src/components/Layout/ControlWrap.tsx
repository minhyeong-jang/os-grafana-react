import React, { FC } from "react";
import styled from "styled-components";

export const ControlWrap: FC = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
const StyledContainer = styled.div`
  flex: 1 1 33%;
  padding: 20px 30px;
  background-color: #efefef;
  margin: 20px;
  color: #111111;
  border-radius: 15px;
  max-width: 500px;
`;
