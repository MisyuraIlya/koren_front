import useDataFeedBack from '@/hooks/useDataFeedBack';
import { useAuth } from '@/modules/auth/store/auth.store';
import { useExercise } from '@/provider/ExerciseProvider';
import { FeedBackService } from '@/services/feedBack.service';
import { MailService } from '@/services/mailService';
import { useFeedBackStore } from '@/store/feedBack.store';
import { useTeacherWork } from '@/store/work.store';
import { onSuccessAlert } from '@/utils/sweetAlert';
import { Box, Button } from '@mui/material';
import React from 'react';

const Process = () => {
    const { user } = useAuth()
    const {exercise} = useExercise()
    const {addFeedBack,setAddFeedBack,typeChoosed, toSaveFeedBack, setToSaveFeedBack, setTypeChoosed, setIsSavedBank} = useFeedBackStore()
    const {groupSelected,studentChoosed} = useTeacherWork()
    const {mutate} = useDataFeedBack()

    const sendFeedBack = async (user: IUser) => {
        try {
          if(studentChoosed && addFeedBack && groupSelected?.uuid) {
            if(toSaveFeedBack){
              await FeedBackService.createFeedBackItem(user?.id!,addFeedBack, typeChoosed)
              setIsSavedBank(true)
            }
            const response = await MailService.createMail(user?.id!,{
              sendTo:[studentChoosed?.id!],
              title:`משוב מערכת עבור תרגיל ${exercise?.title}`,
              description:addFeedBack,
            },
            'feedBack',
            exercise?.id
          )
            if(response){
              onSuccessAlert('הודעה נשלחה בהצלחה','')
              setAddFeedBack('')
              setToSaveFeedBack(false)
              setTypeChoosed('')
              mutate()
            }
          }
        } catch(e) {
          console.log('[ERROR]',e)
        } 
    }

    const sendAllCalss = async () => {
      console.log('groupSelected',groupSelected)
      groupSelected?.students?.map((user) => {
        sendFeedBack(user)
      })
    }

      
    return (
        <Box>
            <Button 
              variant='contained' 
              onClick={() => sendFeedBack(user!)} 
              fullWidth 
              sx={{ ':hover':{bgcolor:'#1D99FF', color:'white'} ,bgcolor:'#B0DCFF', borderRadius:'0px', margin:'5px 0', color:'black', lineHeight:'33px', fontSize:'18px', fontWeight:400}}
            >
            שליחת משוב לתלמיד
            </Button>
            <Button  
              variant='contained' 
              fullWidth 
              onClick={() => sendFeedBack(user!)} 
              sx={{':hover':{bgcolor:'#1D99FF', color:'white'}, bgcolor:'#B0DCFF', borderRadius:'0px', margin:'5px 0', color:'black', lineHeight:'33px', fontSize:'18px', fontWeight:400}}
            >
            שליחת הודעה אישית לתלמיד
            </Button>
            <Button  
              onClick={() => sendAllCalss()}
              variant='contained' 
              fullWidth 
              sx={{':hover':{bgcolor:'#1D99FF', color:'white'}, bgcolor:'#B0DCFF', borderRadius:'0px', margin:'5px 0', color:'black', lineHeight:'33px', fontSize:'18px', fontWeight:400}}
            >
            שליחת הודעה לכל הכיתה
            </Button>
        </Box>
    );
};

export default Process;