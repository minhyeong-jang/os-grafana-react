import { ControllerDataItems, ControllerDataType } from "api/getController";
import { ChangeControllerItem } from "hooks";
import React, { FC } from "react";
import styled from "styled-components";
import { CheckboxData } from "./CheckboxData";
import { InputData } from "./InputData";
import { RadioData } from "./RadioData";
import { SwitchData } from "./SwitchData";

interface Props {
  type: ControllerDataType;
  items: ControllerDataItems[];
  controllerIndex: number;
  changeControllerItem(data: ChangeControllerItem): void;
}
export const ControllerItemList: FC<Props> = ({
  controllerIndex,
  type,
  items,
  changeControllerItem,
  ...props
}) => {
  const onChange = (itemIndex: number, value: string | boolean) => {
    changeControllerItem({
      controllerIndex,
      itemIndex,
      value,
    });
  };

  return (
    <StyledWrap {...props}>
      {type === "radio" ? (
        <RadioData items={items} onChange={() => {}} />
      ) : (
        items.map((item, index) => {
          switch (item.type) {
            case "switch":
              return (
                <SwitchData
                  label={item.label}
                  isChecked={!!item.value}
                  onChange={(value) => onChange(index, value)}
                />
              );
            case "checkbox":
              return (
                <CheckboxData
                  label={item.label}
                  isChecked={!!item.value}
                  onChange={(value) => onChange(index, value)}
                />
              );
            case "input":
              return (
                <InputData
                  label={item.label}
                  value={item.value as string}
                  onChange={(value) => onChange(index, value)}
                />
              );
          }
        })
      )}
    </StyledWrap>
  );
};
const StyledWrap = styled.div`
  flex: 1;
`;
