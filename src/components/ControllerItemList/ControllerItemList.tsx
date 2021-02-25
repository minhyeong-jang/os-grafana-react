import { ControllerDataItems } from "api/getControllerData";
import { CheckboxControl } from "components/CheckboxControl";
import { SwitchControl } from "components/SwitchControl";
import React, { FC } from "react";
import styled from "styled-components";
import { CheckboxData } from "./CheckboxData";
import { InputData } from "./InputData";
import { SwitchData } from "./SwitchData";

interface Props {
  items: ControllerDataItems[];
}
export const ControllerItemList: FC<Props> = ({ items }) => {
  const onChange = () => {};

  return (
    <StyledWrap>
      {items.map((item) => {
        switch (item.type) {
          case "switch":
            return (
              <SwitchData
                label={item.label}
                isChecked={!!item.value}
                onChange={onChange}
              />
            );
          case "checkbox":
            return (
              <CheckboxData
                label={item.label}
                isChecked={!!item.value}
                onChange={onChange}
              />
            );
          case "input":
            return (
              <InputData
                label={item.label}
                value={item.value as string}
                onChange={onChange}
              />
            );
          case "radio":
            return (
              <InputData
                label={item.label}
                value={item.value as string}
                onChange={onChange}
              />
            );
        }
      })}
    </StyledWrap>
  );
};
const StyledWrap = styled.div`
  padding: 0px;
`;
