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
import { useEffect, useState } from 'react';
import randomstring from 'randomstring';
import { PanelOptions } from 'types';
import { message } from 'antd';
import { TimeRange } from '@grafana/data';

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

  const onGetController = async (id: string | number) => {
    try {
      if (!id) return;

      const res = await getController(
        getControllerMethod,
        `${getControllerUrl}/${id}`,
      );

      if (
        res?.data?.length &&
        res.data[0].id !== undefined &&
        res.data[0].items.length
      ) {
        setControllerData(res.data);
      } else {
        showErrorMessage && message.error(`Get Controller Error "${title}"`);
      }
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
        selectedId: type === 'radio' ? items[0].id : null,
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

  const onUpdateController = async (params: UpdateControllerParams) => {
    setLoading(true);

    try {
      await updateController(
        updateControllerMethod,
        updateControllerUrl,
        params,
      );
      const updateData = controllerData.map(data => {
        if (data.id === params.controllerId) {
          return {
            id: params.controllerId,
            type: params.type,
            selectedId: params.selectedId,
            items: params.items,
          };
        }
        return data;
      });

      setControllerData(updateData);
      onOptionsChange({
        ...options,
        dataJsonString: JSON.stringify(updateData),
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
    let params: UpdateControllerParams = {
      controllerId: target.id,
      type: target.type,
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
          onGetController(data[0].id);
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
