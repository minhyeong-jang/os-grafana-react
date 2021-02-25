import React, { useState } from "react";
import { PanelProps } from "@grafana/data";
import { ControllerContainer } from "containers";
import styled from "styled-components";
import { ControlAddModal } from "components/ControlModal";
import { useController } from "hooks";

interface Props extends PanelProps<any> {}

export const RootPanel: React.FC<Props> = ({ options }) => {
  const { controllerData } = useController(options.text);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <StyledPanelWrap>
      <ControllerContainer data={controllerData} />
      <ControlAddModal
        isModalVisible={isModalVisible}
        onModal={() => setIsModalVisible(true)}
        handleOk={() => {}}
        handleCancel={() => setIsModalVisible(false)}
      />
    </StyledPanelWrap>
  );
};

const StyledPanelWrap = styled.div`
  height: 100%;
  overflow: hidden;
`;
