'use client'
import React from 'react';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { Document, Page } from 'react-pdf';


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

  
const PdfUtil = ({link}:{link:string}) => {
    return (
        <>
        <Document file={link}>
            <Page pageNumber={1} renderTextLayer={false}/>
        </Document>
        </>
    );
};

export default PdfUtil;