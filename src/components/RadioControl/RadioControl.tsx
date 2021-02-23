import { Radio } from "antd";
import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  onChange(): void;
  value: string;
}

export const RadioControl: FC<Props> = ({ value, onChange }) => {
  return (
    <Radio.Group onChange={onChange} value={value}>
      <StyledRadio value={"name1"}>Option A</StyledRadio>
      <StyledRadio value={"name2"}>Option B</StyledRadio>
      <StyledRadio value={"name3"}>Option C</StyledRadio>
    </Radio.Group>
  );
};

const StyledRadio = styled(Radio)`
  display: block;
  margin: 0 0 10px;
`;
