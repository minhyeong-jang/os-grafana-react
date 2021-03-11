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
  const { options, width, timeRange, title, onOptionsChange } = props;
  const {
    loading,
    controllerData,
    createController,
    changeControllerItem,
    changeControllerRadioItem,
    updateController,
    updateControllerItems,
  } = useController({
    options,
    title,
    timeRange,
    onOptionsChange,
  });
  const [modalVisible, setModalVisible] = useState(false);

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
