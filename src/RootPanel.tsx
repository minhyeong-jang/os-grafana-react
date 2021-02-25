import React, { useState } from "react";
import { PanelProps } from "@grafana/data";
import { ControllerContainer } from "containers";
import styled from "styled-components";
import { ControllerAddModal, ModalButton } from "components/ControllerModal";
import { useController } from "hooks";

interface Props extends PanelProps<any> {}

export const RootPanel: React.FC<Props> = ({ options }) => {
  const { controllerData, addController } = useController(options.text);
  const [isModalVisible, setIsModalVisible] = useState(false);

  console.log(controllerData);

  return (
    <StyledPanelWrap>
      <ControllerContainer data={controllerData} />
      <ModalButton onModal={() => setIsModalVisible(true)} />
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
  overflow: hidden;
`;
