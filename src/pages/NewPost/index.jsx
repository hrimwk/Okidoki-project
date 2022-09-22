import styled from 'styled-components';
import PostStyle from '../../components/NewPost/PostStyle';

import SelectTag from '../../components/SelectTag';
import { useState } from 'react';
import ReCaptcha from '../../components/ReCaptcha';
// import axios from 'axios';

function NewPost(props) {
  const [selectValue, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [tagValue, setTag] = useState([]);
  const [styledContent, setContent] = useState('');

  const placeholder = '태그를 입력해주세요';
  const data = {
    tags: tagValue,
    content: styledContent,
    sub_category_id: selectValue,
    title: inputValue,
  };

  const getSelectValue = data => {
    setTag(data);
  };
  const getStyledContent = data => {
    setContent(data);
  };

  const selectVal = e => {
    setValue(e.target.value);
  };
  const inputVal = e => {
    setInputValue(e.target.value);
  };
  console.log(data);
  const formSubmit = e => {
    e.preventDefault();
  };

  return (
    <NewContainer>
      <Title>제목</Title>
      <SubTitle>
        <span>닉네임</span>님 지식공유 플랫폼 OKKY에서 최고의 개발자들과 함께
        궁금증을 해결하세요.
      </SubTitle>
      <form onSubmit={formSubmit}>
        <Label>토픽</Label>
        <Select defaultValue={''} onChange={selectVal}>
          <option value={''}>토픽을 선택해주세요.</option>
          <option value="1">내용1</option>
          <option value="2">내용2</option>
        </Select>
        <Label>제목</Label>
        <Input
          type="text"
          placeholder="제목을 입력해주세요."
          onChange={inputVal}
        />
        <Label>태그</Label>
        <SelectTag placeholder={placeholder} getSelectValue={getSelectValue} />
        <Label>상세정보</Label>
        <PostStyle getStyledContent={getStyledContent} />
        <ReCaptcha />
        <ButtonArea>
          <Button type="reset">취소</Button>
          <BlueButton type="submit">등록</BlueButton>
        </ButtonArea>
      </form>
    </NewContainer>
  );
}
const NewContainer = styled.div`
  width: 840px;
  padding: 30px 0;
  margin: 0 auto;
`;
const Title = styled.h1`
  margin-bottom: 20px;
`;
const SubTitle = styled.p`
  font-size: 14px;

  span {
    font-weight: bold;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;
const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;
const Label = styled.label`
  display: block;
  margin: 30px 0 10px;
`;
const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
`;
const Button = styled.button`
  padding: 10px 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background: none;
  &:hover {
    background: rgb(249 250 251);
  }
`;
const BlueButton = styled.button`
  margin-left: 10px;
  padding: 10px 30px;
  color: #fff;
  border: none;
  border-radius: 5px;
  background: rgb(0 144 249);
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;
export default NewPost;
