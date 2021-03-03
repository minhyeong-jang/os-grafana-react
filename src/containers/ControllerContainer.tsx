import { ControllerData } from 'api/getController';
import { ControllerItemList } from 'components/ControllerItemList';
import { ControllerTitle, ControllerWrap } from 'components/Layout';
import { ChangeControllerItem, ChangeControllerRadioItem } from 'hooks';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props {
  loading: boolean;
  width: number;
  data: ControllerData[];
  updateButtonText: string;
  updateController(index: number): void;
  changeControllerItem(data: ChangeControllerItem): void;
  changeControllerRadioItem(data: ChangeControllerRadioItem): void;
}

export const ControllerContainer: FC<Props> = ({
  width,
  loading,
  data,
  updateButtonText,
  updateController,
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
      {data.map((controller, index) => (
        <ControllerWrap key={index}>
          <ControllerTitle>{controller.title}</ControllerTitle>
          <ControllerItemList
            controllerIndex={index}
            selectedId={controller.selectedId}
            type={controller.type}
            items={controller.items}
            changeControllerRadioItem={changeControllerRadioItem}
            changeControllerItem={changeControllerItem}
          />
          <StyledApplyButton
            disabled={loading}
            onClick={() => updateController(index)}
          >
            {updateButtonText}
          </StyledApplyButton>
        </ControllerWrap>
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{ columns: number }>`
  display: grid;
  gap: 0;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  margin: 0px;
`;
const StyledApplyButton = styled.button`
  ${({ theme }) => theme.button.defaultButton};
  margin: 20px auto 0px;
`;
