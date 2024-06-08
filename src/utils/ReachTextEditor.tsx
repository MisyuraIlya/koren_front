import React, { useState, useEffect, FC } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic from 'next/dynamic'
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { stateToHTML } from 'draft-js-export-html';
import { Box } from '@mui/material';

const Editor = dynamic(() => import('react-draft-wysiwyg').then((module) => module.Editor), {
  ssr: false, 
});

type Props = {
  value: string
  setValue: (value: string) => void
  placholder?: string
}

const RichTextEditor:FC<Props> = ({value,setValue,placholder}) => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const handleEditorChange = (newEditorState: any) => {
    setEditorState(newEditorState);
    const contentState = newEditorState.getCurrentContent();
    const contentHtml = stateToHTML(contentState);
    setValue(contentHtml);
  };

  return (
    <Box sx={{width:'100%', bgcolor:'white', padding:'10px 20px'}}>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        placeholder={placholder}
      />
    </Box>
  );
}

export default RichTextEditor;