import React, { FC } from "react";
import styled from "styled-components";
import { Switch, SwitchProps } from "antd";
interface Props extends SwitchProps {
  label: string;
  onChange(): void;
}

export const SwitchControl: FC<Props> = ({ label, onChange, ...props }) => {
  return (
    <StyledWrap>
      <StyledLabel>{label} : </StyledLabel>
      <Switch {...props} onChange={onChange} />
    </StyledWrap>
  );
};
const StyledWrap = styled.div`
  margin: 0 0 10px;
`;
const StyledLabel = styled.div`
  display: inline-block;
  margin-right: 10px;
`;
