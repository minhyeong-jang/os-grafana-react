import { PanelPlugin } from '@grafana/data';
import { RootPanel } from './RootPanel';

import 'antd/lib/style/core/motion.less';
import 'antd/lib/style/components.less';

export const plugin = new PanelPlugin(RootPanel).setPanelOptions(builder => {
  return builder
    .addRadio({
      path: 'getControllerMethod',
      defaultValue: 'get',
      name: 'Get Controller Method',
      settings: {
        options: [
          {
            value: 'get',
            label: 'GET',
          },
          {
            value: 'post',
            label: 'POST',
          },
          {
            value: 'put',
            label: 'PUT',
          },
          {
            value: 'delete',
            label: 'DELETE',
          },
        ],
      },
    })
    .addTextInput({
      path: 'getControllerUrl',
      name: 'URL',
      defaultValue: 'https://',
    })
    .addRadio({
      path: 'createControllerMethod',
      name: 'Create Controller Method',
      defaultValue: 'post',
      settings: {
        options: [
          {
            value: 'get',
            label: 'GET',
          },
          {
            value: 'post',
            label: 'POST',
          },
          {
            value: 'put',
            label: 'PUT',
          },
          {
            value: 'delete',
            label: 'DELETE',
          },
        ],
      },
    })
    .addTextInput({
      path: 'createControllerUrl',
      name: 'URL',
      defaultValue: 'https://',
    })
    .addRadio({
      path: 'updateControllerMethod',
      name: 'Update Controller Method',
      defaultValue: 'put',
      settings: {
        options: [
          {
            value: 'get',
            label: 'GET',
          },
          {
            value: 'post',
            label: 'POST',
          },
          {
            value: 'put',
            label: 'PUT',
          },
          {
            value: 'delete',
            label: 'DELETE',
          },
        ],
      },
    })
    .addTextInput({
      path: 'updateControllerUrl',
      name: 'URL',
      defaultValue: 'https://',
    })
    .addRadio({
      path: 'deleteControllerMethod',
      name: 'Delete Controller Method',
      defaultValue: 'delete',
      settings: {
        options: [
          {
            value: 'get',
            label: 'GET',
          },
          {
            value: 'post',
            label: 'POST',
          },
          {
            value: 'put',
            label: 'PUT',
          },
          {
            value: 'delete',
            label: 'DELETE',
          },
        ],
      },
    })
    .addTextInput({
      path: 'deleteControllerUrl',
      name: 'URL',
      defaultValue: 'https://',
    })
    .addBooleanSwitch({
      path: 'showControllerButton',
      name: 'Show Add/Delete Controller Button',
      defaultValue: true,
    })
    .addTextInput({
      path: 'createButtonText',
      name: 'Create Button Text',
      defaultValue: 'Add Controller',
    })
    .addTextInput({
      path: 'deleteButtonText',
      name: 'Delete Button Text',
      defaultValue: 'Delete Controller',
    })
    .addTextInput({
      path: 'updateButtonText',
      name: 'Update Button Text',
      defaultValue: 'Update',
    })
    .addRadio({
      path: 'updateButtonAlign',
      name: 'Update Button Align',
      defaultValue: 'center',
      settings: {
        options: [
          {
            value: 'left',
            label: 'Left',
          },
          {
            value: 'center',
            label: 'Center',
          },
          {
            value: 'right',
            label: 'Right',
          },
        ],
      },
    })
    .addBooleanSwitch({
      path: 'showErrorMessage',
      name: 'Show Error Message',
      defaultValue: false,
    });
});
