import { Button, Input, Select } from 'antd';
import { ControllerDataItems, ControllerItemType } from 'api';
import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { ModalItemWrap } from './ModalStyle';

const { Option } = Select;

interface Props {
  items: ControllerDataItems[];
  addItems(): void;
  removeItems(id: string | number): void;
  changeType(id: string | number, value: ControllerItemType): void;
  changeLabel(id: string | number, value: string): void;
}
const ControllerMultipleTableComponent: FC<Props> = ({
  items,
  addItems,
  removeItems,
  changeType,
  changeLabel,
}) => {
  return (
    <ModalItemWrap>
      <StyledUl>
        <StyledLi>
          <StyledType>Type</StyledType>
          <StyledItem>Label</StyledItem>
          <StyledAction>Action</StyledAction>
        </StyledLi>
        {items.map((item, index) => (
          <StyledLi key={index}>
            <StyledType>
              <Select
                defaultValue="input"
                style={{ width: '100px' }}
                onChange={value => changeType(item.id, value)}
                value={item.type}
              >
                <Option value="input">입력형</Option>
                <Option value="checkbox">체크형</Option>
                <Option value="switch">스위치형</Option>
              </Select>
            </StyledType>
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
const StyledType = styled.div`
  flex: 0 0 130px;
  text-align: center;
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

export const ControllerMultipleTable = memo(ControllerMultipleTableComponent);
