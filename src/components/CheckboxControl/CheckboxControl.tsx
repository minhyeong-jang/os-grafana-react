import { Checkbox } from "antd";
import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  label: string;
  checked: boolean;
  onChange(): void;
}
export const CheckboxControl: FC<Props> = ({
  onChange,
  checked,
  label,
  children,
}) => {
  return (
    <StyledCheckbox checked={checked} onChange={onChange}>
      {label}
    </StyledCheckbox>
  );
};
const StyledCheckbox = styled(Checkbox)`
  margin: 0 0 10px 0 !important;
  display: block;
`;
