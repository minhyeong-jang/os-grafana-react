import { Button } from "antd";
import { ControllerData } from "api/getController";
import { ControllerItemList } from "components/ControllerItemList";
import { ControllerTitle, ControllerWrap } from "components/Layout";
import { ChangeControllerItem } from "hooks";
import React, { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface Props {
  data: ControllerData[];
  updateController(index: number): void;
  changeControllerItem(data: ChangeControllerItem): void;
}
export const ControllerContainer: FC<Props> = ({
  data,
  updateController,
  changeControllerItem,
}) => {
  const [columns, setColumns] = useState(4);
  const divRef = useRef<HTMLDivElement>(null);

  const columnResize = () => {
    const clientWidth = divRef.current?.clientWidth;
    if (!clientWidth) {
      return;
    }
    if (clientWidth < 700) {
      setColumns(2);
    } else {
      setColumns(3);
    }
  };

  useEffect(() => {
    columnResize();
    window.addEventListener("resize", columnResize);
    return () => {
      window.removeEventListener("resize", columnResize);
    };
  }, [divRef]);

  return (
    <StyledContainer ref={divRef} columns={columns}>
      {data.map((controller, index) => (
        <ControllerWrap key={index}>
          <ControllerTitle>{controller.title}</ControllerTitle>
          <ControllerItemList
            controllerIndex={index}
            type={controller.type}
            items={controller.items}
            changeControllerItem={changeControllerItem}
          />
          <StyledApplyButton
            type='primary'
            onClick={() => updateController(index)}
          >
            업데이트
          </StyledApplyButton>
        </ControllerWrap>
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{ columns: number }>`
  display: grid;
  gap: 20px 20px;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  margin: 0px;
`;
const StyledApplyButton = styled(Button)`
  margin: 20px auto 0px;
`;
