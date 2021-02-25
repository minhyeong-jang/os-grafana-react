import { Modal, Radio, Select } from "antd";
import { ControllerDataItems, ControllerDataType } from "api";
import randomstring from "randomstring";
import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { ControllerTitle } from "./ControllerTitle";
import { ControllerType } from "./ControllerType";
import { ModalButton } from "./ModalButton";
import { ControllerMultipleTable } from "./ControllerMultipleTable";
import { ControllerDefaultTable } from "./ControllerDefaultTable";
import { generateControllerItem } from "utils";

interface Props {
  isModalVisible: boolean;
  onModal(): void;
  handleOk(): void;
  handleCancel(): void;
}
export const ControllerAddModal: FC<Props> = ({
  isModalVisible,
  onModal,
  handleOk,
  handleCancel,
}) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState<ControllerDataType>("input");
  const [items, setItems] = useState<ControllerDataItems[]>([]);

  useEffect(() => {
    setItems([generateControllerItem()]);
  }, [type]);

  const addItems = () => {
    setItems((prevState) => [...prevState, generateControllerItem()]);
  };
  const removeItems = (id: string | number) => {
    console.log(id);
    setItems(items.filter((item) => item.id !== id));
  };
  const changeLabel = (id: string | number, value: string) => {
    const updateItems = items.map((item) =>
      item.id === id ? Object.assign({}, item, { label: value }) : item
    );
    console.log(updateItems);
    setItems(updateItems);
  };

  return (
    <>
      <ModalButton onModal={onModal} />
      <Modal
        title='컨트롤러 추가'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <StyledModalWrap>
          <ControllerTitle title={title} onChange={setTitle} />
          <ControllerType value={type} onChange={setType} />
          {type === "multiple" ? (
            <ControllerMultipleTable />
          ) : (
            <ControllerDefaultTable
              items={items}
              addItems={addItems}
              removeItems={removeItems}
              changeLabel={changeLabel}
            />
          )}
        </StyledModalWrap>
      </Modal>
    </>
  );
};

const StyledModalWrap = styled.div`
  margin: -10px 0;
`;
const StyledPreviewWrap = styled.div`
  padding: 10px;
  border: 1px solid #dedede;
  border-radius: 5px;
  margin: 10px 0px;
`;
const StyledRadio = styled(Radio)`
  display: block;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
