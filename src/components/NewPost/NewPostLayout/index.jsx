import styled from 'styled-components';
import PostStyle from '../PostStyle';

import SelectTag from '../../SelectTag';
import { useEffect, useState } from 'react';
import ReCaptcha from '../../ReCaptcha';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NewPostLayout(props) {
  const [subCategory, setCategory] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8000/menus/${mainId}`).then(res => {
      setCategory(res.data.sub_category);
    });
  }, []);

  const navigate = useNavigate();
  const { title, subTitle, mainId } = props;
  const [selectValue, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [tagValue, setTag] = useState([]);
  const [styledContent, setContent] = useState('');

  const placeholder = '태그를 입력해주세요';

  const selectVal = e => {
    setValue(e.target.value);
  };
  const inputVal = e => {
    setInputValue(e.target.value);
  };

  const formSubmit = e => {
    e.preventDefault();
    const data = {
      tags: tagValue,
      content: styledContent,
      sub_category_id: selectValue,
      title: inputValue,
      main_category_id: mainId,
    };

    axios
      .post('http://localhost:8000/posts', data, {
        headers: {
          authorization: localStorage.getItem('login-token'),
        },
      })
      .then(res => {
        alert('게시글 작성이 완료되었습니다.');
        navigate(`/articles/${res.data.post_id}`);
      })
      .catch(error => {
        if (error.response.data.message.includes('title')) {
          alert('타이틀은 필수값입니다.');
        } else if (error.response.data.message.includes('content')) {
          alert('내용은 필수값입니다.');
        } else if (error.response.data.message.includes('sub_category_id')) {
          alert('토픽은 필수값입니다.');
        } else if (error.response.data.message.includes('TOKEN_EXPIRED')) {
          alert('로그인이 필요한 기능입니다.');
        } else {
          alert('빈 내용이 있습니다.');
        }
      });
  };
  return (
    <NewContainer>
      <Title>{title}</Title>
      <SubTitle>
        <span>닉네임</span>
        {subTitle}
      </SubTitle>
      <form onSubmit={formSubmit}>
        <Label>토픽</Label>
        <Select defaultValue={''} onChange={selectVal}>
          <option value="" disabled>
            토픽을 선택해주세요.
          </option>
          {subCategory.map(data => {
            return (
              <option key={data.unique_id} value={data.unique_id}>
                {data.sub_category_name}
              </option>
            );
          })}
        </Select>
        <Label>제목</Label>
        <Input
          type="text"
          placeholder="제목을 입력해주세요."
          onChange={inputVal}
        />
        <Label>태그</Label>
        <SelectTag placeholder={placeholder} setTag={setTag} />
        <Label>상세정보</Label>
        <PostStyle setContent={setContent} content={styledContent} />
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
  color: rgb(107 114 128);
  span {
    font-weight: 900;
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
  option[value=''][disabled] {
    display: none;
  }
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
  cursor: pointer;
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
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export default NewPostLayout;
