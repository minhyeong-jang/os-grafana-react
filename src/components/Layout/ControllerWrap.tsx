import React, { FC } from 'react';
import styled from 'styled-components';

export const ControllerWrap: FC = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
const StyledContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin: 5px;
  /* border: 1px solid ${({ theme }) => theme.color.border};
  padding: 20px;
  background: ${({ theme }) => theme.color.background}; */
  color: ${({ theme }) => theme.color.text};
  border-radius: 3px;
`;
