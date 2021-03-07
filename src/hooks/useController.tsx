import {
  updateController,
  getController,
  ControllerData,
  ControllerDataType,
  ControllerDataItems,
  createController,
  UpdateControllerParams,
  deleteController,
} from 'api';
import { useState } from 'react';
import randomstring from 'randomstring';
import { PanelOptions } from 'types';
import { message } from 'antd';

export interface CreateController {
  type: ControllerDataType;
  items: ControllerDataItems[];
}
export interface ChangeControllerItem {
  controllerIndex: number;
  itemIndex: number;
  value: string | boolean;
}
export interface ChangeControllerRadioItem {
  controllerIndex: number;
  value: string | number;
}

export const useController = (options: PanelOptions, panelTitle: string) => {
  const {
    createControllerUrl,
    createControllerMethod,
    getControllerUrl,
    getControllerMethod,
    updateControllerUrl,
    updateControllerMethod,
    deleteControllerUrl,
    deleteControllerMethod,
    showErrorMessage,
  } = options;

  const [controllerData, setControllerData] = useState<ControllerData[]>([
    {
      id: 'xiecHphdmUaIYz0IwSE8pQicXfwW6nPu',
      type: 'multiple',
      items: [
        {
          id: 'Er6rriYbF6PQTrOepC9A3Wd84T66NQhU',
          label: 'input 데이터',
          type: 'input',
          value: '',
        },
        {
          id: 'ITSlOR4aGwjZ7WCUcSWY865guiAwq4vJ',
          label: 'Checkbox 데이터',
          type: 'checkbox',
          value: false,
        },
        {
          id: 'uz3J0i5xgRxjg6roW1Ed9DsbwVKW3osu',
          label: '스위치 1',
          type: 'switch',
          value: false,
        },
        {
          id: 'dyiUJCYd722gAxqribS7eeO9NTdh3UkJ',
          label: '스위치 2',
          type: 'switch',
          value: false,
        },
      ],
    },
  ]);
  const [loading, setLoading] = useState(false);

  const onGetController = async () => {
    try {
      const res = await getController(getControllerMethod, getControllerUrl);

      if (
        res?.data?.length &&
        res.data[0].id !== undefined &&
        res.data[0].items.length
      ) {
        setControllerData(res.data);
      } else {
        showErrorMessage &&
          message.error(`Get Controller Error "${panelTitle}"`);
      }
    } catch (e) {
      showErrorMessage && message.error(`Get Controller Error "${panelTitle}"`);
    }
  };

  const onCreateController = async ({ type, items }: CreateController) => {
    setLoading(true);

    if (!items.length) {
      alert('아이템이 없습니다.');
      return false;
    }

    try {
      const data: ControllerData = {
        id: randomstring.generate(),
        type,
        selectedId: type === 'radio' ? items[0].id : null,
        items,
      };

      await createController(createControllerMethod, createControllerUrl, data);
      setControllerData(prevState => [...prevState, data]);

      return true;
    } catch (e) {
      showErrorMessage && message.error('Create Controller Error');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const onUpdateController = async (index: number) => {
    setLoading(true);
    const target = controllerData[index];
    const params: UpdateControllerParams = {
      controllerId: target.id,
      items: target.items,
    };
    if (target.type === 'radio') {
      params.selectedId = target.selectedId;
    }

    try {
      await updateController(
        updateControllerMethod,
        updateControllerUrl,
        params,
      );
    } catch (e) {
      showErrorMessage &&
        message.error(`Update Controller Error "${panelTitle}"`);
    } finally {
      setLoading(false);
    }
  };

  const changeControllerRadioItem = async ({
    controllerIndex,
    value,
  }: ChangeControllerRadioItem) => {
    const newData = controllerData.slice();
    newData[controllerIndex].selectedId = value;

    setControllerData(newData);
  };

  const changeControllerItem = async ({
    controllerIndex,
    itemIndex,
    value,
  }: ChangeControllerItem) => {
    const newData = controllerData.slice();
    newData[controllerIndex].items[itemIndex].value = value;

    setControllerData(newData);
  };

  const onDeleteController = async () => {
    try {
      if (controllerData.length) {
        await deleteController(
          deleteControllerMethod,
          `${deleteControllerUrl}/${controllerData[0].id}`,
        );
        setControllerData([]);
      }
    } catch (e) {
      showErrorMessage &&
        message.error(`Delete Controller Error "${panelTitle}"`);
    }
  };

  return {
    loading,
    controllerData,
    getController: onGetController,
    createController: onCreateController,
    deleteController: onDeleteController,
    changeControllerItem,
    changeControllerRadioItem,
    updateController: onUpdateController,
  };
};
