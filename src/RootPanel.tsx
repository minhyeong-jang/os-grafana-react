import React, { useState } from "react";
import { PanelProps } from "@grafana/data";
import {
  CheckboxPanelContainer,
  RadioPanelContainer,
  SwitchPanelContainer,
} from "containers";
import styled from "styled-components";
import { Button } from "antd";
import { ControlAddModal } from "components/ControlModal";
import { useController } from "hooks";

interface Props extends PanelProps<any> {}

export const RootPanel: React.FC<Props> = ({ options }) => {
  const { controllerData } = useController(options.text);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <StyledPanelWrap>
      <StyledContainer>
        <SwitchPanelContainer />
        <RadioPanelContainer />
        <CheckboxPanelContainer />
      </StyledContainer>
      <StyledAddButton type='primary' onClick={() => setIsModalVisible(true)}>
        컨트롤러 추가
      </StyledAddButton>
      <ControlAddModal
        isModalVisible={isModalVisible}
        handleOk={() => {}}
        handleCancel={() => setIsModalVisible(false)}
      />
    </StyledPanelWrap>
  );
};

const StyledPanelWrap = styled.div`
  height: 100%;
`;
const StyledContainer = styled.div`
  display: flex;
  overflow: hidden;
`;
const StyledAddButton = styled(Button)`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;
