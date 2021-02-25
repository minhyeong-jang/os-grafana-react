import React, { FC } from "react";
import styled from "styled-components";
import { Input } from "antd";
import { ControllerItemLabel, ControllerItemWrap } from "./ItemStyle";

interface Props {
  label: string;
  value: string;
  onChange(): void;
}

export const InputData: FC<Props> = ({ label, onChange, value }) => {
  return (
    <ControllerItemWrap>
      <ControllerItemLabel>{label} : </ControllerItemLabel>
      <StyledInput value={value} onChange={onChange} />
    </ControllerItemWrap>
  );
};

const StyledInput = styled(Input)`
  flex: 1 1 auto;
`;
