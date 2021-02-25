import { ControllerDataItems } from "api/getControllerData";
import { CheckboxControl } from "components/CheckboxControl";
import { SwitchControl } from "components/SwitchControl";
import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  items: ControllerDataItems[];
}
export const ControlList: FC<Props> = ({ items }) => {
  const onChange = () => {};

  return (
    <StyledWrap>
      {items.map((item) => {
        switch (item.type) {
          case "switch":
            return (
              <SwitchControl
                label={item.label}
                checked={!!item.value}
                onChange={onChange}
              />
            );
          case "checkbox":
            return (
              <CheckboxControl
                label={item.label}
                checked={!!item.value}
                onChange={onChange}
              />
            );
          case "switch":
            return (
              <SwitchControl
                label={item.label}
                checked={!!item.value}
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
