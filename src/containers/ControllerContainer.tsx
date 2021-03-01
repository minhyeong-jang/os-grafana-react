import { ControllerData } from 'api/getController';
import { ControllerItemList } from 'components/ControllerItemList';
import { ControllerTitle, ControllerWrap } from 'components/Layout';
import { ChangeControllerItem, ChangeControllerRadioItem } from 'hooks';
import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  data: ControllerData[];
  updateController(index: number): void;
  changeControllerItem(data: ChangeControllerItem): void;
  changeControllerRadioItem(data: ChangeControllerRadioItem): void;
}

export const ControllerContainer: FC<Props> = ({
  data,
  updateController,
  changeControllerItem,
  changeControllerRadioItem,
}) => {
  return (
    <StyledContainer>
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
          <StyledApplyButton onClick={() => updateController(index)}>
            업데이트
          </StyledApplyButton>
        </ControllerWrap>
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0px;
`;
const StyledApplyButton = styled.button`
  ${({ theme }) => theme.button.defaultButton};
  margin: 20px auto 0px;
`;
