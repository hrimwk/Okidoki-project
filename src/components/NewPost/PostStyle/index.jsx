import React from 'react';
import { useEffect, useMemo, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

function PostStyle({ setContent, content }) {
  const getContent = value => {
    setContent(value);
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'ordered',
    'bullet',
    'blockquote',
    'link',
    'code-block',
    'video',
    'image',
  ];
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: 1 }, { header: 2 }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'link', 'code-block', 'image', 'video'],
        ],
        // handlers: { // 위에서 만든 이미지 핸들러 사용하도록 설정
        //     image: imageHandler,
        // },
      },
    }),
    []
  );

  return (
    <QuillContainer>
      <ReactQuill
        formats={formats}
        value={content}
        onChange={getContent}
        modules={modules}
        theme="snow"
        placeholder="내용을 입력하세요."
      />
    </QuillContainer>
  );
}

const QuillContainer = styled.div`
  .ql-toolbar {
    border-radius: 5px 5px 0 0;
    border-color: #ddd !important;
    border-bottom: 1px solid #ddd !important;
    background: rgb(249 250 251);
  }
  .ql-container {
    height: 350px;
    border-color: #ddd !important;
    border-radius: 0 0 5px 5px;
  }
  .ql-editor {
    font-size: 14px;
  }
`;

export default React.memo(PostStyle);
