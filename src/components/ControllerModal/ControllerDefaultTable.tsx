import { Button, Input } from 'antd';
import { ControllerDataItems } from 'api';
import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { ModalItemWrap } from './ModalStyle';

interface Props {
  items: ControllerDataItems[];
  addItems(): void;
  removeItems(id: string | number): void;
  changeLabel(id: string | number, value: string): void;
}
const ControllerDefaultTableComponent: FC<Props> = ({
  items,
  addItems,
  removeItems,
  changeLabel,
}) => {
  return (
    <ModalItemWrap>
      <StyledUl>
        <StyledLi>
          <StyledItem>Label</StyledItem>
          <StyledAction>Action</StyledAction>
        </StyledLi>
        {items.map((item, index) => (
          <StyledLi key={index}>
            <StyledItem>
              <StyledInput
                value={item.label}
                onChange={e => changeLabel(item.id, e.target.value)}
              />
            </StyledItem>
            <StyledAction>
              <StyledButton onClick={() => removeItems(item.id)}>
                Delete
              </StyledButton>
            </StyledAction>
          </StyledLi>
        ))}
        <StyledLi>
          <StyledItem>
            <StyledButton style={{ width: '100%' }} onClick={() => addItems()}>
              Add Item
            </StyledButton>
          </StyledItem>
        </StyledLi>
      </StyledUl>
    </ModalItemWrap>
  );
};

const StyledUl = styled.ul`
  margin: 20px 0px;
`;
const StyledLi = styled.li`
  display: flex;
  padding: 9px 0px;
`;
const StyledItem = styled.div`
  flex: 1 1 auto;
  text-align: center;
`;
const StyledAction = styled.div`
  flex: 0 0 100px;
  text-align: center;
`;
const StyledInput = styled(Input)`
  ${({ theme }) => theme.input.defaultInput};
`;
const StyledButton = styled.button`
  ${({ theme }) => theme.button.defaultButton};
`;

export const ControllerDefaultTable = memo(ControllerDefaultTableComponent);
