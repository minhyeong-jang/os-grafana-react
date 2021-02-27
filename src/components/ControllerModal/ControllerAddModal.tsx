import { Modal, Radio } from "antd";
import {
  ControllerDataItems,
  ControllerDataType,
  ControllerItemType,
} from "api";
import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { ControllerTitle } from "./ControllerTitle";
import { ControllerType } from "./ControllerType";
import { ControllerMultipleTable } from "./ControllerMultipleTable";
import { ControllerDefaultTable } from "./ControllerDefaultTable";
import { generateControllerItem } from "utils";
import { AddController } from "hooks";
import { ControllerItemList } from "components/ControllerItemList";

interface Props {
  isModalVisible: boolean;
  addController(data: AddController): Promise<boolean>;
  handleClosed(): void;
}
export const ControllerAddModal: FC<Props> = ({
  isModalVisible,
  addController,
  handleClosed,
}) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState<ControllerDataType>("input");
  const [items, setItems] = useState<ControllerDataItems[]>([]);

  useEffect(() => {
    setItems([generateControllerItem(type)]);
  }, [type]);

  const onOk = async () => {
    const res = await addController({ title, type, items });
    if (res) {
      handleClosed();
    }
  };
  const addItems = () => {
    setItems((prevState) => [...prevState, generateControllerItem(type)]);
  };
  const removeItems = (id: string | number) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const changeLabel = (id: string | number, value: string) => {
    const updateItems = items.map((item) =>
      item.id === id ? Object.assign({}, item, { label: value }) : item
    );
    setItems(updateItems);
  };
  const changeType = (id: string | number, type: ControllerItemType) => {
    const updateItems = items.map((item) =>
      item.id === id
        ? Object.assign({}, item, {
            type,
            value: type === "input" ? "" : false,
          })
        : item
    );
    setItems(updateItems);
  };

  return (
    <Modal
      title='컨트롤러 추가'
      visible={isModalVisible}
      onOk={() => onOk()}
      onCancel={() => handleClosed()}
    >
      <StyledModalWrap>
        <ControllerTitle title={title} onChange={setTitle} />
        <ControllerType value={type} onChange={setType} />
        {type === "multiple" ? (
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
`;
const StyledPreviewTitle = styled.p`
  margin: 30px 0px 10px;
  font-weight: bold;
`;
const StyledControllerItemList = styled(ControllerItemList)`
  padding: 15px;
  border: 1px solid #dedede;
  border-radius: 5px;
`;
