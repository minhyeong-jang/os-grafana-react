import styled from "styled-components";

export const ControllerItemWrap = styled.div`
  display: flex;
  align-items: center;
  height: 32px;

  &:not(:last-child) {
    margin: 0 0 10px;
  }
`;

export const ControllerItemLabel = styled.div`
  display: inline-block;
  margin-right: 20px;
  flex: 0 0 auto;
  font-size: 14px !important;
`;
