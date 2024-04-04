import { Button,Box } from '@mui/material';
import React from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import { useAdminCoursesProvider } from '../../provider/AdminCoursesProvider';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

const PdfHandler = ({item}: {item: ICourse}) => {
    const {uploadPdf} = useAdminCoursesProvider()

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && item.id) {
          uploadPdf(item.id.toString(), file);
        }
    };

    const openLink = () => {
        if (item?.pdf) {
          const pdfUrl = `${process.env.NEXT_PUBLIC_MEDIA}/${item.pdf}`;
          window.open(pdfUrl, '_blank');
        }
    };

    return (
        <Box sx={{display:'flex'}}>
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            PDF
            <VisuallyHiddenInput  accept=".pdf" type="file" onChange={handleFileUpload} /> 
            </Button>
            {item?.pdf &&
                <IconButton onClick={openLink}>
                    <VisibilityIcon />
                </IconButton> 
            }

        </Box>
    );
};

export default PdfHandler;