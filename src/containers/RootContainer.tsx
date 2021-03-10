import React, { useEffect, useState } from 'react';
import { PanelProps } from '@grafana/data';
import { ControllerContainer } from './ControllerContainer';
import styled, { ThemeProvider } from 'styled-components';
import {
  ControllerAddModal,
  ModalButton,
} from '../components/ControllerAddModal';
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
    deleteController,
  } = useController(options, title);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

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
        {options.showControllerButton &&
          (controllerData.length ? (
            <ModalButton onModal={() => setDeleteModalVisible(true)}>
              {options.deleteButtonText}
            </ModalButton>
          ) : (
            <ModalButton onModal={() => setAddModalVisible(true)}>
              {options.createButtonText}
            </ModalButton>
          ))}
        <ControllerContainer
          loading={loading}
          width={width}
          data={controllerData}
          updateButtonAlign={options.updateButtonAlign}
          changeControllerItem={changeControllerItem}
          changeControllerRadioItem={changeControllerRadioItem}
          updateController={updateController}
          updateButtonText={options.updateButtonText}
        />
        {addModalVisible && (
          <ControllerAddModal
            loading={loading}
            isModalVisible={addModalVisible}
            createController={createController}
            handleClosed={() => setAddModalVisible(false)}
          />
        )}
        {deleteModalVisible && (
          <ControllerAddModal
            loading={loading}
            isModalVisible={deleteModalVisible}
            createController={createController}
            handleClosed={() => setAddModalVisible(false)}
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
