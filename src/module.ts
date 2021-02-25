import { PanelPlugin } from "@grafana/data";
import { RootPanel } from "./RootPanel";

import "antd/lib/style/core/motion.less";
import "antd/lib/style/components.less";
// import "antd/lib/switch/style/index.less";
// import "antd/lib/select/style/index.less";
// import "antd/lib/radio/style/index.less";
// import "antd/lib/button/style/index.less";
// import "antd/lib/checkbox/style/index.less";
// import "antd/lib/modal/style/index.less";

export const plugin = new PanelPlugin<any>(RootPanel).setPanelOptions(
  (builder) => {
    return builder.addTextInput({
      path: "text",
      name: "Server Domain",
      defaultValue: "https://",
      description: "API Domain Url",
    });
  }
);
