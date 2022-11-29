import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

export default function ProfileImg(props) {
  const { profile_image, readProfile } = props;

  const [view, setView] = useState(false);

  const onChangeImg = e => {
    e.preventDefault();
    if (e.target.files) {
      const uploadFile = e.target.files[0];
      const formData = new FormData();
      formData.append('filename', uploadFile);
      axios
        .patch('http://localhost:8000/profile/image', formData, {
          headers: {
            Authorization: localStorage.getItem('login-token'),
          },
        })
        .then(res => window.location.reload());
    }
  };

  return (
    <form>
      <ImgBox profile_image={profile_image}></ImgBox>
      <Btn
        onMouseEnter={() => setView(true)}
        onMouseLeave={() => setView(false)}
      >
        <input
          type="file"
          accept="image/*"
          onChange={onChangeImg}
          id="profile_img"
        ></input>
        {view && <label htmlFor="profile_img">변경</label>}
      </Btn>
    </form>
  );
}

const ImgBox = styled.span`
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  width: 160px;
  height: 160px;
  border: 1.5px solid #d9d9d9;
  border-radius: 50%;
  background: url(${props => props.profile_image}) center center no-repeat;
  background-size: cover;
`;

const Btn = styled.div`
  z-index: 100;
  position: absolute;
  top: 0;
  right: 0;
  width: 160px;
  height: 160px;
  border-radius: 50%;

  input {
    display: none;
  }

  label {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #232323;
    opacity: 0.8;
    color: #fff;
    width: 100%;
    height: 100%;
    cursor: pointer;
    border-radius: 50%;
    font-size: 14px;
  }
`;
