import {
  updateController,
  getController,
  ControllerData,
  ControllerDataType,
  ControllerDataItems,
  createController,
  UpdateControllerParams,
  deleteController,
  GetControllerResponse,
} from 'api';
import { useEffect, useState } from 'react';
import randomstring from 'randomstring';
import { PanelOptions } from 'types';
import { message } from 'antd';
import { TimeRange } from '@grafana/data';

export interface CreateController {
  type: ControllerDataType;
  items: ControllerDataItems[];
}
export interface UpdateController {
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
  value: number;
}

interface Props {
  options: PanelOptions;
  title: string;
  timeRange: TimeRange;
  onOptionsChange: (option: PanelOptions) => void;
}
export const useController = ({
  options,
  title,
  timeRange,
  onOptionsChange,
}: Props) => {
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
    dataJsonString,
  } = options;

  const [controllerData, setControllerData] = useState<ControllerData[]>([]);
  const [loading, setLoading] = useState(false);

  const onGetController = async (data: ControllerData[]) => {
    try {
      if (!data.length) return;

      let target = data[0];
      const res = await getController(getControllerMethod, getControllerUrl);

      if (res.items && res.items.length && res.items[0].value !== undefined) {
        res.items.map((resItem, index) => {
          target.items[index].value = resItem.value;
        });
      } else if (res.selectedId !== undefined) {
        target.selectedId = res.selectedId;
      }

      setControllerData([target]);
      onOptionsChange({ ...options, dataJsonString: JSON.stringify([target]) });
    } catch (e) {
      showErrorMessage && message.error(`Get Controller Error "${title}"`);
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
        selectedId: type === 'radio' ? 0 : null,
        items,
      };

      await createController(createControllerMethod, createControllerUrl, data);

      setControllerData(prevState => [...prevState, data]);
      onOptionsChange({ ...options, dataJsonString: JSON.stringify([data]) });

      return true;
    } catch (e) {
      showErrorMessage && message.error('Create Controller Error');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const onUpdateController = async ({ type, items }: UpdateController) => {
    setLoading(true);

    let target = controllerData[0];
    let params: UpdateControllerParams = {};
    if (type === 'radio') {
      params.selectedId = 0;
    } else {
      params.items = items.map(item => ({ value: item.value }));
    }
    target.type = type;
    target.items = items;

    try {
      await updateController(
        updateControllerMethod,
        updateControllerUrl,
        params,
      );

      setControllerData([target]);
      onOptionsChange({
        ...options,
        dataJsonString: JSON.stringify([target]),
      });

      return true;
    } catch (e) {
      showErrorMessage && message.error(`Update Controller Error "${title}"`);
      return false;
    } finally {
      setLoading(false);
    }
  };
  const onUpdateControllerItems = async (id: string | number) => {
    setLoading(true);

    const target = controllerData.filter(item => item.id === id)[0];
    let params: UpdateControllerParams = {};
    if (target.type === 'radio') {
      params.selectedId = target.selectedId || 0;
    } else {
      params.items = target.items.map(item => ({ value: item.value }));
    }

    try {
      await updateController(
        updateControllerMethod,
        updateControllerUrl,
        params,
      );
      onOptionsChange({
        ...options,
        dataJsonString: JSON.stringify([controllerData]),
      });
    } catch (e) {
      showErrorMessage && message.error(`Update Controller Error "${title}"`);
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
      showErrorMessage && message.error(`Delete Controller Error "${title}"`);
    }
  };

  useEffect(() => {
    if (dataJsonString) {
      try {
        const data = JSON.parse(dataJsonString);
        setControllerData(data);

        const regex = new RegExp(
          /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
        );
        if (getControllerUrl.match(regex)) {
          onGetController(data);
        }
      } catch {
        showErrorMessage && message.error(`Get Controller Error "${title}"`);
      }
    }
  }, [timeRange.to]);

  return {
    loading,
    controllerData,
    getController: onGetController,
    createController: onCreateController,
    deleteController: onDeleteController,
    changeControllerItem,
    changeControllerRadioItem,
    updateController: onUpdateController,
    updateControllerItems: onUpdateControllerItems,
  };
};
