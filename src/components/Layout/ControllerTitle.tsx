import React, { FC } from 'react';
import styled from 'styled-components';

export const ControllerTitle: FC = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
const StyledContainer = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`;
