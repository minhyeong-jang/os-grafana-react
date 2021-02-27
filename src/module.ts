import { PanelPlugin } from '@grafana/data';
import { RootPanel } from './RootPanel';

import 'antd/lib/style/core/motion.less';
import 'antd/lib/style/components.less';

export const plugin = new PanelPlugin<any>(RootPanel).setPanelOptions(builder => {
  return builder.addTextInput({
    path: 'text',
    name: 'Server Domain',
    defaultValue: 'https://',
    description: 'API Domain Url',
  });
});
