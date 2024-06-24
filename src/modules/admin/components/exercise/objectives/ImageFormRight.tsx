'use client'
import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import { Box, Button, styled } from '@mui/material';
import Image from 'next/image';
import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { onErrorAlert } from '@/utils/sweetAlert';
import { ExerciseServices } from '@/services/ExerciseServices';
import { MainService } from '@/modules/admin/services/main.service';
import { AdminExerciseService } from '@/modules/admin/services/adminExercise.service';

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

const ImageFormRight: FC<IObjectiveModule> = ({ objective, tabIndex, taskIndex, rowIndex, objectiveIndex }) => {
  const { setValue } = useAdminExercise();
  const [image, setImage] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].isFullText`, objective.isFullText);
    setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].moduleType`, objective.moduleType);
    setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].orden`, objective.orden);
    setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].placeholder`, objective.placeholder);
    setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].values`, objective.values);
    setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].answers`, objective.answers);
  }, [tabIndex, taskIndex, rowIndex, objectiveIndex, objective, setValue]);

  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const id = objective?.id!;
    if (id) {
      const file = event.target.files?.[0];
      if (file) {
        setSelectedFile(file);
        try {
        const data = await MainService.UploadMedia(file) 
        const update = await AdminExerciseService.updateObjective(id, data.path)
        setImage(URL.createObjectURL(file));
        } catch (error) {
          onErrorAlert('שגיאה', `${error}`);
        }
      }
    } else {
      onErrorAlert('צריך קודם לשמור', '');
    }
  };

  return (
    <>
      <Box>
        <Box className="py-4 h-full mr-4">
          {selectedFile ? (
            <Box>
              <Box onClick={() => fileInputRef.current?.click()}>
                <Image src={URL.createObjectURL(selectedFile)} alt="uploaded image" width={300} height={300} />
              </Box>
            </Box>
          ) : (
            objective?.values[0]?.value ? (
              <Box>
                  <Image src={`http://3.74.228.194:4001/${objective?.values[0]?.value}`} alt="uploaded image" width={300} height={300} />
              </Box>
            ) : (
              <Box sx={{ bgcolor: 'white', padding: '10px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
                  <Image src="/images/upload.svg" alt="upload image" width={120} height={120} />
                </Box>
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                >
                  העלאת תמונה
                  <VisuallyHiddenInput type="file" onChange={uploadImage} />
                </Button>
              </Box>
            )
          )}
        </Box>
      </Box>
    </>
  );
};

export default ImageFormRight;
