"use client"
import React, {ChangeEvent} from 'react';
import { Button, Box } from '@mui/material';
import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { useParams } from 'next/navigation';

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

const ButtonHandler = () => {
    const {uploadXl, setFileChoosed, deleteExercise, exercise} = useAdminExercise()
 
    return (
        <Box sx={{ display: 'flex', gap: '10px' }}>
          {!exercise?.id &&
          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            בחר קובץ
            <VisuallyHiddenInput type="file" onChange={(e) => setFileChoosed(e.target?.files?.[0] ?? null)} />
          </Button>
          }
          {!exercise?.id &&
          <Button color="primary" sx={{ minWidth: '150px', fontSize: '18px' }} variant="contained" onClick={() => uploadXl()}>
            העלה
          </Button>
          }
          {exercise?.id &&
            <Button color="error" sx={{ minWidth: '150px', fontSize: '18px' }} variant="contained" type="button" onClick={() => deleteExercise(exercise.id!.toString())}>
              מחיקה
            </Button>
          }
          {!exercise?.id &&
          <Button color="success" sx={{ minWidth: '150px', fontSize: '18px' }} variant="contained" type="submit">
            שמור
          </Button>
          }
      </Box>
    );
};

export default ButtonHandler;