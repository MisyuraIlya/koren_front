'use client'
import React, { useState, useEffect, FC } from 'react';
import dynamic from 'next/dynamic';
import { EditorState, convertToRaw, ContentState, convertFromHTML } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { stateToHTML } from 'draft-js-export-html';
import { Box } from '@mui/material';

const Editor = dynamic(() => import('react-draft-wysiwyg').then((module) => module.Editor), {
  ssr: false, 
});

type Props = {
  value: string
  setValue: (value: string) => void
  placeholder?: string
}

const RichTextEditor: FC<Props> = ({ value, setValue, placeholder }) => {
  const [editorState, setEditorState] = useState<EditorState>(() => {
    const contentState = convertFromHTML(value ?? '');
    if (contentState) {
      return EditorState.createWithContent(ContentState.createFromBlockArray(contentState.contentBlocks));
    }
    return EditorState.createEmpty();
  });

  // Update editor state when value prop changes
  useEffect(() => {
    const contentState = convertFromHTML(value ?? '');
    if (contentState) {
      setEditorState(EditorState.createWithContent(ContentState.createFromBlockArray(contentState.contentBlocks)));
    }
  }, [value]);

  const handleEditorChange = (newEditorState: any) => {
    setEditorState(newEditorState);
    const contentState = newEditorState.getCurrentContent();
    const contentHtml = stateToHTML(contentState);
    setValue(contentHtml);
  };

  const toolbarOptions = {
    options: ['inline', 'colorPicker', 'list', 'textAlign', 'link', 'history'],
    inline: {
      options: ['bold', 'italic', 'underline'],
    },
    list: {
      options: ['unordered', 'ordered'],
    },
    textAlign: {
      options: ['left', 'center', 'right'],
    },
    link: {
      options: ['link'],
    },
    history: {
      options: ['undo', 'redo'],
    },
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'white', padding: '10px 20px', textAlign:'left' }}>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        placeholder={placeholder}
        toolbar={toolbarOptions}
      
      />
    </Box>
  );
}

export default RichTextEditor;
