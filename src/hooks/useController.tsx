import {
  updateController,
  getController,
  ControllerData,
  ControllerDataType,
  ControllerDataItems,
  createController,
  UpdateControllerParams,
} from 'api';
import { useState } from 'react';
import randomstring from 'randomstring';
import { PanelOptions } from 'types';

export interface CreateController {
  title: string;
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
  } = options;

  const [controllerData, setControllerData] = useState<ControllerData[]>([]);
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
        alert(`Get Controller Error "${panelTitle}"`);
      }
    } catch (e) {
      alert(`Get Controller Error "${panelTitle}"`);
    }
  };

  const onCreateController = async ({
    title,
    type,
    items,
  }: CreateController) => {
    setLoading(true);

    if (!title) {
      alert('타이틀을 입력해주세요.');
      return false;
    }
    if (!items.length) {
      alert('아이템이 없습니다.');
      return false;
    }

    try {
      const data: ControllerData = {
        id: randomstring.generate(),
        type,
        title,
        selectedId: type === 'radio' ? items[0].id : null,
        items,
      };

      await createController(createControllerMethod, createControllerUrl, data);

      setControllerData(prevState => [...prevState, data]);

      return true;
    } catch (e) {
      alert('Create Controller Error');
      return true;
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
      alert(`Update Controller Error "${panelTitle}"`);
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

  return {
    loading,
    controllerData,
    getController: onGetController,
    createController: onCreateController,
    changeControllerItem,
    changeControllerRadioItem,
    updateController: onUpdateController,
  };
};
