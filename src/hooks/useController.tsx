import {
  updateController,
  getController,
  ControllerData,
  ControllerDataType,
  ControllerDataItems,
  createController,
} from 'api';
import { useEffect, useState } from 'react';
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

export const useController = ({
  createControllerUrl,
  createControllerMethod,
  getControllerUrl,
  getControllerMethod,
  updateControllerUrl,
  updateControllerMethod,
}: PanelOptions) => {
  const [controllerData, setControllerData] = useState<ControllerData[]>([]);
  const [loading, setLoading] = useState(false);

  const getControllerData = async () => {
    try {
      const res = await getController(getControllerMethod, getControllerUrl);
      setControllerData(res.data);
    } catch (e) {
      alert('Get Controller Error');
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
    try {
      const target = controllerData[index];
      await updateController(updateControllerMethod, updateControllerUrl, {
        controllerId: target.id,
        selectedId: target.selectedId,
        items: target.items,
      });
    } catch (e) {
      alert('Update Controller Error');
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

  useEffect(() => {
    getControllerData();
  }, []);

  return {
    loading,
    controllerData,
    createController: onCreateController,
    changeControllerItem,
    changeControllerRadioItem,
    updateController: onUpdateController,
  };
};
