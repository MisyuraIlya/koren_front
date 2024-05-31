import React, { useRef } from 'react';
import {
    MenuButtonBold,
    MenuButtonItalic,
    MenuControlsContainer,
    MenuDivider,
    MenuSelectHeading,
    RichTextEditor,
    type RichTextEditorRef,
  } from "mui-tiptap";
import StarterKit from "@tiptap/starter-kit";

const ReachTextEditor = () => {
    const rteRef = useRef<RichTextEditorRef>(null);
    
    return (
        <>
        <RichTextEditor
            ref={rteRef}
            extensions={[StarterKit]} 
            renderControls={() => (
            <MenuControlsContainer>
                <MenuSelectHeading />
                <MenuDivider />
                <MenuButtonBold />
                <MenuButtonItalic />
            </MenuControlsContainer>
            )}
        />   
        </>
    );
};

export default ReachTextEditor;