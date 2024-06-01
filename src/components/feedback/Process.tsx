import { FeedBackService } from '@/services/feedBack.service';
import { useFeedBack } from '@/store/feedBack.store';
import { useTeacherWork } from '@/store/work.store';
import { onSuccessAlert } from '@/utils/sweetAlert';
import { Box, Button } from '@mui/material';
import React from 'react';

const Process = () => {
    const {addFeedBack,setAddFeedBack} = useFeedBack()
    const {groupSelected,studentChoosed} = useTeacherWork()

    const sendFeedBack = async () => {
        try {
          if(studentChoosed && addFeedBack && groupSelected?.uuid) {
            const response = await FeedBackService.createFeedBack(addFeedBack,studentChoosed,groupSelected?.uuid)
            if(response){
              onSuccessAlert('הודעה נשלחה בהצלחה','')
              setAddFeedBack('')
            }
          }
        } catch(e) {
          console.log('[ERROR]',e)
        } 
      }

      
    return (
        <Box>
            <Button variant='contained' onClick={() => sendFeedBack()} fullWidth sx={{bgcolor:'#B0DCFF', borderRadius:'0px', margin:'5px 0', color:'black', lineHeight:'33px', fontSize:'18px', fontWeight:400}}>
            שליחת משוב לתלמיד
            </Button>
            <Button  variant='contained' disabled  fullWidth sx={{bgcolor:'#B0DCFF', borderRadius:'0px', margin:'5px 0', color:'black', lineHeight:'33px', fontSize:'18px', fontWeight:400}}>
            שליחת הודעה אישית לתלמיד
            </Button>
            <Button  variant='contained' disabled fullWidth sx={{bgcolor:'#B0DCFF', borderRadius:'0px', margin:'5px 0', color:'black', lineHeight:'33px', fontSize:'18px', fontWeight:400}}>
            שליחת הודעה לכל הכיתה
            </Button>
        </Box>
    );
};

export default Process;