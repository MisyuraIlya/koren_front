import React, { useRef,FC } from 'react';
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

interface ReachTextEditorProps {
    value: string
    setValue: (value: string) => void
}

const ReachTextEditor:FC<ReachTextEditorProps> = ({value,setValue}) => {
    const rteRef = useRef<RichTextEditorRef>(null);
    
    
    return (
        <>
        <RichTextEditor
            ref={rteRef}
            extensions={[StarterKit]} 
            content={value}
            onUpdate={(e) => setValue(e.editor.getHTML())}
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