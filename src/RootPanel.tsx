import React, { useState } from "react";
import { PanelProps } from "@grafana/data";
import { ControllerContainer } from "containers";
import styled from "styled-components";
import { ControllerAddModal, ModalButton } from "components/ControllerModal";
import { useController } from "hooks";

interface Props extends PanelProps<any> {}

export const RootPanel: React.FC<Props> = ({ options }) => {
  const {
    controllerData,
    addController,
    changeControllerItem,
    updateController,
  } = useController(options.text);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <StyledPanelWrap>
      <ModalButton onModal={() => setIsModalVisible(true)} />
      <ControllerContainer
        data={controllerData}
        changeControllerItem={changeControllerItem}
        updateController={updateController}
      />
      {isModalVisible && (
        <ControllerAddModal
          isModalVisible={isModalVisible}
          addController={addController}
          handleClosed={() => setIsModalVisible(false)}
        />
      )}
    </StyledPanelWrap>
  );
};

const StyledPanelWrap = styled.div`
  height: 100%;
  overflow: scroll;
`;
