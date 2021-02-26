import { ControllerData } from "api/getControllerData";
import { ControllerItemList } from "components/ControllerItemList";
import { ControllerTitle, ControllerWrap } from "components/Layout";
import { OnControllerItem } from "hooks";
import React, { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface Props {
  data: ControllerData[];
  onControllerItem(data: OnControllerItem): void;
}
export const ControllerContainer: FC<Props> = ({ data, onControllerItem }) => {
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
            onControllerItem={onControllerItem}
          />
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
