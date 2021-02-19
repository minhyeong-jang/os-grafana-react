import React from "react";
import { PanelProps } from "@grafana/data";
import { SimpleOptions } from "types";
import { css, cx } from "emotion";
import { stylesFactory, useTheme } from "@grafana/ui";
import { ControlPanelContainer } from "containers";

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({
  options,
  data,
  width,
  height,
}) => {
  return <ControlPanelContainer />;
};
