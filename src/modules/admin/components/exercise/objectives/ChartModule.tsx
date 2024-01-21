import React, {FC, useRef, useState, ChangeEvent} from 'react';
import Image from 'next/image';
import { ISecondModuleExercises, ISecondModuleSubExercises } from '@/types/ModulesTypes.ts/SecondModule.interface';
import { ExercisesService } from '@/services/exercises/Exercises';
import { getImageId, getImageValue } from '../helpers/ImageModuleHelper';
import { onErrorAlert } from '@/utils/sweetAlert';
import { getVideoValue, getVideoId} from '../helpers/VideoModuleHelper';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useForm, SubmitHandler } from "react-hook-form";
type ImageModuleProps = {
    data: ISecondModuleSubExercises[]
}

type VideoType = {
    videoLink: string,
};


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ChartModule:FC<ImageModuleProps> = ({data}) => {
    const [link, setLink] = useState<string>('')
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<VideoType>();

    const onSubmit: SubmitHandler<VideoType> = (dataInput) => {
        const id = getVideoId(data)
        if(id) {
            setLink(dataInput.videoLink)
            if(dataInput.videoLink) {
                ExercisesService.updateExerciseLinkVideo(id, dataInput.videoLink)
            }
            reset()
            handleClose()

        } else {
            onErrorAlert('ניתן קודם לשמור את הקובץ','')
        }

    }

    const videoLink = getVideoValue(data)
    return (
        <div className='col-span-4' >
            <div className='px-4 py-4 h-full'>
                {(videoLink && !link)?
                    <>
                        <div className='relative'>
                            <button 
                            onClick={() => handleOpen()}
                            className='absolute bottom-[-45px] z-50 bg-primary text-white px-2 py-2 rounded-lg left-1/3 cursor-pointer'>
                                שינוי סרטון
                            </button>
                            <div 
                            dangerouslySetInnerHTML={{ __html: videoLink?? '' }}
                            onClick={() => handleOpen()}
                            />
                        </div>
 
                    
                    </>


                    :
                    
                    <>
                        {link ? (
                            <div className=' h-full flex justify-center items-center bg-white relative'>
                                <button 
                                onClick={() => handleOpen()}
                                className='absolute bottom-[-45px] z-50 bg-primary text-white px-2 py-2 rounded-lg left-1/3 cursor-pointer'>
                                    שינוי סרטון
                                </button>
                                <div 
                                dangerouslySetInnerHTML={{ __html: link?? '' }}
                                />
                            </div>
                        ) : (

                            <div className='border-8 border-mainExerciseBg border-dashed h-full flex justify-center items-center bg-white'>
                                <div className='cursor-pointer' onClick={() => handleOpen()}> 
                                    <Image src={'/images/upload.svg'} alt="upload image" width={100} height={100} />
                                    <h4>העלאת לינק לסרטון</h4>
                                </div>    
                            </div>
                        )}
                    </>
                
                }

            </div>   
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        <textarea {...register("videoLink")} className='border w-full'/>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button onClick={handleSubmit(onSubmit)} className='bg-primary text-white px-6 py-2 rounded-lg cursor-pointer'>שמור</button>
                    </div>
                </Box> 
            </Modal> 
        </div>
    );
};

export default ChartModule;