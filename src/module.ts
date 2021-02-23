import { PanelPlugin } from "@grafana/data";
import { SimpleOptions } from "./types";
import { SimplePanel } from "./RootPanel";

import "antd/lib/switch/style/index.less";
import "antd/lib/select/style/index.less";
import "antd/lib/radio/style/index.less";
import "antd/lib/checkbox/style/index.less";

export const plugin = new PanelPlugin<SimpleOptions>(
  SimplePanel
).setPanelOptions((builder) => {
  return builder;
});
