import { ControllerData } from "api/getControllerData";
import { ControlList } from "components/ControlList";
import { ControlTitle, ControlWrap } from "components/Layout";
import React, { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface Props {
  data: ControllerData[];
}
export const ControllerContainer: FC<Props> = ({ data }) => {
  const [columns, setColumns] = useState(4);
  const divRef = useRef<HTMLDivElement>(null);

  const columnResize = () => {
    const clientWidth = divRef.current?.clientWidth;
    if (!clientWidth) {
      return;
    }
    if (clientWidth < 700) {
      setColumns(2);
    } else if (clientWidth < 900) {
      setColumns(3);
    } else {
      setColumns(4);
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
      {data.map((controller) => (
        <ControlWrap>
          <ControlTitle>{controller.title}</ControlTitle>
          <ControlList items={controller.items} />
        </ControlWrap>
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{ columns: number }>`
  display: grid;
  gap: 68px 20px;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  margin: 0px;
`;
