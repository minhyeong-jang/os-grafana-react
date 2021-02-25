import { Button, Input, Modal, Radio, Select } from "antd";
import React, { FC } from "react";
import styled from "styled-components";

const { Option } = Select;

interface Props {
  isModalVisible: boolean;
  handleOk(): void;
  handleCancel(): void;
}
export const ControlAddModal: FC<Props> = ({
  isModalVisible,
  handleOk,
  handleCancel,
}) => {
  const [value, setValue] = React.useState(1);

  const onChange = (value: string) => {
    console.log("radio checked", value);
  };

  const onChange2 = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <Modal
      title='컨트롤러 추가'
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <StyledModalWrap>
        <StyledWrap>
          <StyledLabel>타이틀 :</StyledLabel>
          <Input style={{ width: "180px" }} />
        </StyledWrap>
        <StyledWrap>
          <StyledLabel>컨트롤러 타입 :</StyledLabel>
          <Select
            defaultValue='input'
            style={{ width: "100px" }}
            onChange={onChange}
          >
            <Option value='input'>입력형</Option>
            <Option value='radio'>선택형</Option>
            <Option value='checkbox'>체크형</Option>
            <Option value='switch'>스위치형</Option>
            <Option value='multiple'>복합형</Option>
          </Select>
        </StyledWrap>
        <StyledWrap>
          <StyledUl>
            <StyledLi>
              <StyledItem>이름</StyledItem>
              <StyledAction>Action</StyledAction>
            </StyledLi>
            <StyledLi>
              <StyledItem>
                <Input />
              </StyledItem>
              <StyledAction>
                <Button type="primary">Delete</Button>
              </StyledAction>
            </StyledLi>
            <StyledLi>
              <StyledItem>
                <Input />
              </StyledItem>
              <StyledAction>
                <Button type="primary">Delete</Button>
              </StyledAction>
            </StyledLi>
            <StyledLi>
              <StyledItem>
                <Button type="primary">Add Item</Button>
              </StyledItem>
            </StyledLi>
          </StyledUl>
        </StyledWrap>
        
        {/* <StyledWrap>
          <StyledLabel>리스트</StyledLabel>
          <Select defaultValue='radio' onChange={onChange}>
            <Option value='radio'>radio</Option>
            <Option value='checkbox'>Checkbox</Option>
            <Option value='switch'>Switch</Option>
            <Option value='input'>Input</Option>
          </Select>
        </StyledWrap> */}
        <StyledWrap>
          <StyledLabel>미리보기 :</StyledLabel>
          <StyledPreviewWrap>
            <Radio.Group onChange={onChange2} value={value}>
              <StyledRadio value={1}>A</StyledRadio>
              <StyledRadio value={2}>B</StyledRadio>
              <StyledRadio value={3}>C</StyledRadio>
              <StyledRadio value={4}>D</StyledRadio>
            </Radio.Group>
          </StyledPreviewWrap>
        </StyledWrap>
      </StyledModalWrap>
    </Modal>
  );
};

const StyledModalWrap = styled.div`
  margin: -10px 0;
`;
const StyledWrap = styled.div`
  margin-bottom: 10px;
`;
const StyledLabel = styled.div`
  display: inline-block;
  margin-right: 5px;
  min-width: 100px;
`;
const StyledPreviewWrap = styled.div`
  padding: 10px;
  border: 1px solid #dedede;
  border-radius: 5px;
  margin: 10px 0px;
`;
const StyledRadio = styled(Radio)`
  display: block;
  
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
const StyledUl = styled.ul`
  margin: 10px 0px;
`;
const StyledLi = styled.li`
  display: flex;
  padding: 9px 0px;

  &:not(:last-child) {
    border-bottom: 1px solid #dedede;
  }
`;

const StyledItem = styled.div`
  flex: 1 1 auto;
  text-align: center;
`
const StyledAction = styled.div`
  flex: 0 0 100px;
  text-align: center;
`;