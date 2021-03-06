import { ControllerDataItems, ControllerDataType } from 'api/getController';
import { ChangeControllerItem, ChangeControllerRadioItem } from 'hooks';
import React, { FC } from 'react';
import styled from 'styled-components';
import { CheckboxData } from './CheckboxData';
import { InputData } from './InputData';
import { RadioData } from './RadioData';
import { SwitchData } from './SwitchData';

interface Props {
  type: ControllerDataType;
  selectedId?: string | number | null;
  items: ControllerDataItems[];
  controllerIndex?: number;
  changeControllerRadioItem?(data: ChangeControllerRadioItem): void;
  changeControllerItem?(data: ChangeControllerItem): void;
}
export const ControllerItemList: FC<Props> = ({
  controllerIndex,
  type,
  items,
  selectedId,
  changeControllerRadioItem,
  changeControllerItem,
  ...props
}) => {
  const onChange = (itemIndex: number, value: string | boolean) => {
    if (typeof controllerIndex === 'number' && changeControllerItem) {
      changeControllerItem({
        controllerIndex,
        itemIndex,
        value,
      });
    }
  };
  const onRadioChange = (value: string) => {
    if (typeof controllerIndex === 'number' && changeControllerRadioItem) {
      changeControllerRadioItem({
        controllerIndex,
        value,
      });
    }
  };

  return (
    <StyledWrap {...props}>
      {type === 'radio' ? (
        <RadioData
          items={items}
          selectedId={selectedId}
          onChange={value => onRadioChange(value)}
        />
      ) : (
        items.map((item, index) => {
          switch (item.type) {
            case 'switch':
              return (
                <SwitchData
                  label={item.label}
                  isChecked={!!item.value}
                  onChange={value => onChange(index, value)}
                />
              );
            case 'checkbox':
              return (
                <CheckboxData
                  label={item.label}
                  isChecked={!!item.value}
                  onChange={value => onChange(index, value)}
                />
              );
            case 'input':
              return (
                <InputData
                  label={item.label}
                  value={item.value as string}
                  onChange={value => onChange(index, value)}
                />
              );
            default:
              return null;
          }
        })
      )}
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  display: grid;
  gap: 10px 0;
  align-items: center;
  grid-template-columns: 2;
  grid-template-columns: auto 1fr;
`;
