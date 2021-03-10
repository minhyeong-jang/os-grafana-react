import { Modal } from 'antd';
import {
  ControllerData,
  ControllerDataItems,
  ControllerDataType,
  ControllerItemType,
  UpdateControllerParams,
} from 'api';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ControllerType } from './ControllerType';
import { ControllerMultipleTable } from './ControllerMultipleTable';
import { ControllerDefaultTable } from './ControllerDefaultTable';
import { generateControllerItem } from 'utils';
import { CreateController } from 'hooks';
import { ControllerItemList } from 'components/ControllerItemList';

interface Props {
  loading: boolean;
  controllerData: ControllerData | undefined;
  isModalVisible: boolean;
  createController(data: CreateController): Promise<boolean>;
  updateController(params: UpdateControllerParams): Promise<boolean>;
  handleClosed(): void;
}
export const ControllerModal: FC<Props> = ({
  loading,
  controllerData,
  isModalVisible,
  createController,
  updateController,
  handleClosed,
}) => {
  const [type, setType] = useState<ControllerDataType>('input');
  const [items, setItems] = useState<ControllerDataItems[]>([]);

  useEffect(() => {
    if (controllerData) {
      setType(controllerData.type);
      setItems(controllerData.items);
    }
  }, [controllerData]);

  useEffect(() => {}, [type]);

  const typeChange = (value: ControllerDataType) => {
    setType(value);
    setItems([generateControllerItem(value)]);
  };

  const onOk = async () => {
    let res = false;

    if (controllerData) {
      const params: UpdateControllerParams = {
        controllerId: controllerData.id,
        type,
        items,
      };
      if (type === 'radio') {
        params.selectedId = null;
      }
      res = await updateController(params);
    } else {
      res = await createController({ type, items });
    }
    if (res) {
      handleClosed();
    }
  };
  const addItems = () => {
    setItems(prevState => [...prevState, generateControllerItem(type)]);
  };
  const removeItems = (id: string | number) => {
    setItems(items.filter(item => item.id !== id));
  };
  const changeLabel = (id: string | number, value: string) => {
    const updateItems = items.map(item =>
      item.id === id ? Object.assign({}, item, { label: value }) : item,
    );
    setItems(updateItems);
  };
  const changeType = (id: string | number, type: ControllerItemType) => {
    const updateItems = items.map(item =>
      item.id === id
        ? Object.assign({}, item, {
            type,
            value: type === 'input' ? '' : false,
          })
        : item,
    );
    setItems(updateItems);
  };

  return (
    <Modal
      title={`컨트롤러 ${controllerData ? '수정' : '추가'}`}
      visible={isModalVisible}
      onOk={() => onOk()}
      okButtonProps={{
        disabled: loading,
      }}
      onCancel={() => handleClosed()}
    >
      <StyledModalWrap>
        <ControllerType value={type} onChange={typeChange} />
        {type === 'multiple' ? (
          <ControllerMultipleTable
            items={items}
            addItems={addItems}
            changeType={changeType}
            removeItems={removeItems}
            changeLabel={changeLabel}
          />
        ) : (
          <ControllerDefaultTable
            items={items}
            addItems={addItems}
            removeItems={removeItems}
            changeLabel={changeLabel}
          />
        )}
      </StyledModalWrap>
      <StyledPreviewTitle>미리보기</StyledPreviewTitle>
      <StyledControllerItemList type={type} items={items} />
    </Modal>
  );
};

const StyledModalWrap = styled.div`
  margin: -10px 0;
  background-color: ${({ theme }) => theme.color.background};
`;
const StyledPreviewTitle = styled.p`
  margin: 30px 0px 10px;
  font-weight: bold;
`;
const StyledControllerItemList = styled(ControllerItemList)`
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 5px;
`;
