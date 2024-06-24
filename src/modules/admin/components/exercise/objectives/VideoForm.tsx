import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import { Box, Button, TextField } from '@mui/material';
import Image from 'next/image';
import React, {FC, useEffect, useState} from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ExerciseModal from '@/components/exercise/ExerciseModal';
import { onErrorAlert } from '@/utils/sweetAlert';
import { AdminExerciseService } from '@/modules/admin/services/adminExercise.service';

const VideoForm:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

    const [modal,setModal] = useState(false)
    const {setValue} = useAdminExercise()
    const [embaded, setEmbaded] = useState('')

    const handleSave = async () => {
        const id = objective?.id!;
        if (id) {
            try {
            const update = await AdminExerciseService.updateObjective(id, embaded)
            setModal(false)
            location.reload()
            } catch (error) {
                onErrorAlert('שגיאה', `${error}`);
            }
        } else {
          onErrorAlert('צריך קודם לשמור', '');
        }
    }

    useEffect(() => {
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].isFullText`, objective.isFullText)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].moduleType`, objective.moduleType)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].orden`, objective.orden)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].placeholder`, objective.placeholder)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].values`, objective.values)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].answers`, objective.answers)
    }, [tabIndex,taskIndex,rowIndex,objectiveIndex,objective]);

    return (
        <>
        <Box>
            <Box className="py-4 h-full mr-4">
       
                {objective?.values[0]?.value ? (
                <Box>
                    <Box sx={{padding:'20px 100px'}} dangerouslySetInnerHTML={{ __html: objective.values[0]?.value }}/> 
                </Box>
                ) : (
                <Box sx={{ bgcolor: 'white', padding: '10px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
                        <Image src="/images/upload.svg" alt="upload image" width={120} height={120} />
                    </Box>
                    <Button variant="contained" endIcon={<CloudUploadIcon />} onClick={() => setModal(true)}>
                     העלאת סרטון
                    </Button>
                </Box>
                )}
            </Box>
        </Box>
        <ExerciseModal open={modal} setOpen={setModal}>
            <Box>
                <Box>
                    <TextField label="לינק לסרטון" value={embaded} sx={{width:'300px'}} onChange={(e) => setEmbaded(e.target.value)}/>
                </Box>
                <Box sx={{display:'flex', justifyContent:'center', pt:'10px'}}>
                    <Button variant='contained' onClick={() => handleSave()}>
                        שמירה
                    </Button>
                </Box>
            </Box>
        </ExerciseModal>
        </>
    );
};

export default VideoForm;