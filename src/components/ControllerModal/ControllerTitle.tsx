import { Input } from "antd";
import React, { FC, memo } from "react";
import { ModalItemWrap, ModalItemLabel } from "./ModalStyle";

interface Props {
  title: string;
  onChange(value: string): void;
}
const ControllerTitleComponent: FC<Props> = ({ title, onChange }) => {
  return (
    <ModalItemWrap>
      <ModalItemLabel>타이틀 :</ModalItemLabel>
      <Input
        style={{ width: "180px" }}
        value={title}
        onChange={(e) => onChange(e.target.value)}
      />
    </ModalItemWrap>
  );
};

export const ControllerTitle = memo(ControllerTitleComponent);
