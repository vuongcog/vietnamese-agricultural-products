import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import các kiểu mặc định của Quill

const TextEditor = ({ onChange }) => {
  const [editorContent, setEditorContent] = useState('');

  const handleEditorChange = content => {
    setEditorContent(content);
    onChange(content); // gửi nội dung đã thay đổi lên component cha hoặc xử lý khác
  };

  return <ReactQuill value={editorContent} onChange={handleEditorChange} />;
};

const BlogContent = ({ content }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

const App = () => {
  const [content, setContent] = useState('');
  return (
    <div className="App">
      <h1>Blog Editor</h1>
      <TextEditor onChange={setContent} />
      <h2>Preview</h2>
      <BlogContent content={content} />
    </div>
  );
};

export default App;
