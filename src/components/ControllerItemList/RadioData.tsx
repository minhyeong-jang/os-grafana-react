import React, { FC } from "react";
import { Radio } from "antd";
import { ControllerItemLabel, ControllerItemWrap } from "./ItemStyle";
import styled from "styled-components";
import { ControllerDataItems } from "api";

interface Props {
  items: ControllerDataItems[];
  onChange(): void;
}

export const RadioData: FC<Props> = ({ items, onChange }) => {
  return (
    <Radio.Group onChange={(e) => onChange()} value={""}>
      {items.map((item, index) => (
        <ControllerItemWrap key={index}>
          <ControllerItemLabel>{item.label} : </ControllerItemLabel>
          <StyledRadio value={item.value} />
        </ControllerItemWrap>
      ))}
    </Radio.Group>
  );
};

const StyledRadio = styled(Radio)`
  display: block;
`;
