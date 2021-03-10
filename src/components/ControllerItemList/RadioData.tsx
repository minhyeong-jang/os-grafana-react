import React, { FC } from 'react';
import { Radio } from 'antd';
import { ControllerItemLabel, ControllerItemWrap } from './ItemStyle';
import styled from 'styled-components';
import { ControllerDataItems } from 'api';

interface Props {
  items: ControllerDataItems[];
  selectedId?: string | number | null;
  onChange(value: string): void;
}

export const RadioData: FC<Props> = ({ items, selectedId, onChange }) => {
  return (
    <Radio.Group onChange={e => onChange(e.target.value)} value={selectedId}>
      {items.map(item => (
        <>
          <ControllerItemLabel>
            <StyledRadio value={item.id} />
          </ControllerItemLabel>
          <ControllerItemWrap>{item.label}</ControllerItemWrap>
        </>
      ))}
    </Radio.Group>
  );
};

const StyledRadio = styled(Radio)`
  display: block;
`;
