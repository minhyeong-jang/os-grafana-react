import React, { useEffect, useState } from 'react';
import { PanelProps } from '@grafana/data';
import { ControllerContainer } from './ControllerContainer';
import styled, { ThemeProvider } from 'styled-components';
import { ControllerModal, ModalButton } from '../components/ControllerModal';
import { useController } from 'hooks';
import { theme, GlobalStyle } from 'styles';
import { PanelOptions } from 'types';

interface Props extends PanelProps<PanelOptions> {}

export const RootContainer: React.FC<Props> = props => {
  const { options, width, timeRange, title } = props;
  const {
    loading,
    controllerData,
    getController,
    createController,
    changeControllerItem,
    changeControllerRadioItem,
    updateController,
    updateControllerItems,
  } = useController(options, title);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const regex = new RegExp(
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
    );
    if (options.getControllerUrl.match(regex)) {
      getController();
    }
  }, [timeRange.to]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledPanelWrap>
        {options.showControllerButton && (
          <ModalButton onModal={() => setModalVisible(true)}>
            {controllerData.length
              ? options.updateModalButtonText
              : options.createModalButtonText}
          </ModalButton>
        )}
        <ControllerContainer
          loading={loading}
          width={width}
          data={controllerData}
          updateButtonAlign={options.updateButtonAlign}
          changeControllerItem={changeControllerItem}
          changeControllerRadioItem={changeControllerRadioItem}
          updateControllerItems={updateControllerItems}
          updateButtonText={options.updateButtonText}
        />
        {modalVisible && (
          <ControllerModal
            controllerData={controllerData[0]}
            loading={loading}
            isModalVisible={modalVisible}
            createController={createController}
            updateController={updateController}
            handleClosed={() => setModalVisible(false)}
          />
        )}
      </StyledPanelWrap>
    </ThemeProvider>
  );
};

const StyledPanelWrap = styled.div`
  height: 100%;
  overflow: hidden;
`;
