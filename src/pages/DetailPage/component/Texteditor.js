import { useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
//import { useEffect } from 'react';
//import styled from 'styled-components';
// import './quill.snow.scss';

function Texteditor(props) {
  const { setwritecomment, writecomment } = props;

  // useEffect(() => {
  //   setwritecomment('aa');
  // }, []);
  const modules = useMemo(
    () => ({
      toolbar: {
        // 툴바에 넣을 기능들을 순서대로 나열하면 된다.
        container: [
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          //  [{ size: ['small', false, 'large', 'huge'] }, { color: [] }],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
            //{ align: [] },
          ],
          ['image', 'video'],
        ],
        // handlers: { // 위에서 만든 이미지 핸들러 사용하도록 설정
        //     image: imageHandler,
        // },
      },
    }),
    []
  );
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
  return (
    <div className="texteditor">
      <ReactQuill
        // ref={quillRef}
        value={writecomment}
        modules={modules}
        theme="snow"
        formats={formats}
        onChange={e => {
          setwritecomment(e);
        }}
        // className={styles.quillEditor}
      ></ReactQuill>
    </div>
  );
}

// const Editing = styled.div`
//   border-bottom-left-radius: 7px;
//   border-bottom-right-radius: 7px;
//   width: 100%;
//   height: 70%;
// `;

export default Texteditor;
