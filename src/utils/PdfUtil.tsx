'use client'
import React, { useState } from 'react';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { Document, Page } from 'react-pdf';
import { Box, IconButton, Typography } from '@mui/material';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

  
const PdfUtil = ({link}:{link:string | null}) => {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
      }
      
    return (
        <>
        {link &&
            <Document file={link} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} renderTextLayer={false}/>
            </Document>
        }
          {numPages && numPages > 1 &&
            <Box sx={{display:"flex", gap:'10px', alignItems:'center'}}>
                <IconButton onClick={() => setPageNumber( pageNumber - 1)} disabled={pageNumber === 1}>
                    <NavigateNextIcon/>
                </IconButton>
                <Typography>
                    עמוד {pageNumber} מתוך {numPages}
                </Typography>
                <IconButton onClick={() => setPageNumber( pageNumber + 1)} disabled={pageNumber === numPages}> 
                    <NavigateBeforeIcon/>
                </IconButton>
            </Box>
        }
        </>
    );
};

export default PdfUtil;