import React, { useState } from 'react';
import { PanelProps } from '@grafana/data';
import { ControllerContainer } from 'containers';
import styled, { ThemeProvider } from 'styled-components';
import { ControllerAddModal, ModalButton } from 'components/ControllerModal';
import { useController } from 'hooks';
import { theme, GlobalStyle } from 'styles';

interface Props extends PanelProps<any> {}

export const RootPanel: React.FC<Props> = ({ options }) => {
  const {
    controllerData,
    addController,
    changeControllerItem,
    changeControllerRadioItem,
    updateController,
  } = useController(options.text);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledPanelWrap>
        <ModalButton onModal={() => setIsModalVisible(true)} />
        <ControllerContainer
          data={controllerData}
          changeControllerItem={changeControllerItem}
          changeControllerRadioItem={changeControllerRadioItem}
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
    </ThemeProvider>
  );
};

const StyledPanelWrap = styled.div`
  height: 100%;
  overflow: scroll;
`;
