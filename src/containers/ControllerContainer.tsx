import { ControllerData } from 'api/getController';
import { ControllerItemList } from 'components/ControllerItemList';
import { ControllerWrap } from 'components/Layout';
import { ChangeControllerItem, ChangeControllerRadioItem } from 'hooks';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { PanelOptionAlign } from 'types';

interface Props {
  loading: boolean;
  width: number;
  data: ControllerData[];
  updateButtonText: string;
  updateButtonAlign: PanelOptionAlign;
  updateControllerItems(id: string | number): void;
  changeControllerItem(data: ChangeControllerItem): void;
  changeControllerRadioItem(data: ChangeControllerRadioItem): void;
}

export const ControllerContainer: FC<Props> = ({
  width,
  loading,
  data,
  updateButtonText,
  updateButtonAlign,
  updateControllerItems,
  changeControllerItem,
  changeControllerRadioItem,
}) => {
  const [columns, setColumns] = useState(5);

  useEffect(() => {
    if (width < 500) {
      setColumns(1);
    } else if (width < 700) {
      setColumns(2);
    } else if (width < 1000) {
      setColumns(3);
    } else if (width < 1200) {
      setColumns(4);
    } else {
      setColumns(5);
    }
  }, [width]);

  return (
    <StyledContainer columns={columns}>
      {data.length
        ? data.map((controller, index) => (
            <ControllerWrap>
              <ControllerItemList
                controllerIndex={index}
                selectedId={controller.selectedId}
                type={controller.type}
                items={controller.items}
                changeControllerRadioItem={changeControllerRadioItem}
                changeControllerItem={changeControllerItem}
              />
              <StyledApplyButton
                updateButtonAlign={updateButtonAlign}
                disabled={loading}
                onClick={() => updateControllerItems(controller.id)}
              >
                {updateButtonText}
              </StyledApplyButton>
            </ControllerWrap>
          ))
        : null}
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{ columns: number }>`
  display: grid;
  gap: 0;
  grid-template-columns: repeat(1, 1fr);
  margin: 0px;
`;
const StyledApplyButton = styled.button<{
  updateButtonAlign: PanelOptionAlign;
}>`
  margin: ${({ updateButtonAlign }) =>
    updateButtonAlign === 'right'
      ? '20px 0 0 auto'
      : updateButtonAlign === 'left'
      ? '20px auto 0 0'
      : '20px auto 0'};
  ${({ theme }) => theme.button.defaultButton};
`;
