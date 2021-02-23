import { Checkbox } from "antd";
import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  onChange(): void;
}
export const CheckboxControl: FC<Props> = ({ onChange, children }) => {
  return <StyledCheckbox onChange={onChange}>{children}</StyledCheckbox>;
};
const StyledCheckbox = styled(Checkbox)`
  margin: 0 0 10px 0 !important;
  display: block;
`;
