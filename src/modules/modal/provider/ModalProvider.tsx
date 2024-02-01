"use client";
import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import StudentModal from '../components/StudentModal';
import StudentExplanation from '../components/StudentExplanation';

interface ModalContextType {
    handleIframe:(value: string) => void
    iframe: string
    handleExplanation: (value: string) => void
    explanation: string
}


const ModalContext = createContext<ModalContextType | null>(null);

const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('Can not run without "ModalProvider"');
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode
};


const ModalProvider: React.FC<ModalProviderProps> = (props) => {
    const [iframe, setIframe] = useState<string>('')
    const [openLink, setOpenLink] = useState<boolean>(false)
    const [explanation, setExplanation] = useState<string>('')
    const [explanationModal, setExplanationModal] = useState<boolean>(false)

    const handleIframe = (iframe: string) => {
        setIframe(iframe)
        setOpenLink(true)
    }

    const handleExplanation = (value: string) => {
        setExplanation(value)
        setExplanationModal(true)
    }

    const value: ModalContextType = {
        handleIframe,
        iframe,
        handleExplanation,
        explanation
    };

  return (
    <ModalContext.Provider value={value} {...props}>
        <StudentModal active={openLink} setActive={setOpenLink}/>
        <StudentExplanation active={explanationModal} setActive={setExplanationModal}/>
        {props.children}
    </ModalContext.Provider>
  );
};

export { useModal, ModalProvider };