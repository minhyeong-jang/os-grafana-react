import { Select } from "antd";
import { ControllerDataType } from "api";
import React, { FC, memo } from "react";
import { ModalItemWrap, ModalItemLabel } from "./ModalStyle";

const { Option } = Select;

interface Props {
  value: ControllerDataType;
  onChange(value: ControllerDataType): void;
}
const ControllerTypeComponent: FC<Props> = ({ value, onChange }) => {
  return (
    <ModalItemWrap>
      <ModalItemLabel>컨트롤러 타입 :</ModalItemLabel>
      <Select
        defaultValue='input'
        style={{ width: "100px" }}
        onChange={onChange}
        value={value}
      >
        <Option value='input'>입력형</Option>
        <Option value='radio'>선택형</Option>
        <Option value='checkbox'>체크형</Option>
        <Option value='switch'>스위치형</Option>
        <Option value='multiple'>복합형</Option>
      </Select>
    </ModalItemWrap>
  );
};

export const ControllerType = memo(ControllerTypeComponent);
