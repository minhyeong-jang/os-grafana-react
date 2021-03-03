import React, { useState } from 'react';
import { PanelProps } from '@grafana/data';
import { ControllerContainer } from 'containers';
import styled, { ThemeProvider } from 'styled-components';
import { ControllerAddModal, ModalButton } from 'components/ControllerModal';
import { useController } from 'hooks';
import { theme, GlobalStyle } from 'styles';
import { PanelOptions } from 'types';

interface Props extends PanelProps<PanelOptions> {}

export const RootPanel: React.FC<Props> = props => {
  const { options } = props;
  console.log(props);
  console.log(props.timeRange.to);
  const {
    loading,
    controllerData,
    createController,
    changeControllerItem,
    changeControllerRadioItem,
    updateController,
  } = useController(options);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledPanelWrap>
        {options.showAddButton && (
          <ModalButton onModal={() => setIsModalVisible(true)}>
            {options.createButtonText}
          </ModalButton>
        )}
        <ControllerContainer
          loading={loading}
          data={controllerData}
          changeControllerItem={changeControllerItem}
          changeControllerRadioItem={changeControllerRadioItem}
          updateController={updateController}
          updateButtonText={options.updateButtonText}
        />
        {isModalVisible && (
          <ControllerAddModal
            loading={loading}
            isModalVisible={isModalVisible}
            createController={createController}
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
