import { useFeedBack } from '@/store/feedBack.store';
import ReachTextEditor from '@/utils/ReachTextEditor';
import { Box, Checkbox, FormControlLabel, FormGroup, MenuItem, Select, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Create = () => {
    const {positive, negative, positiveChoosed, negativeChoosed, setPositiveChoosed, setNegativeChoosed, isSavedBank, setAddFeedBack, addFeedBack} = useFeedBack()
    return (
        <>
        <Box sx={{paddingTop:'20px'}}>
            {/* <ReachTextEditor value={addFeedBack} setValue={setAddFeedBack}/> */}
            <TextField 
                fullWidth
                label="משוב"
                multiline 
                rows={8} 
                value={addFeedBack} 
                onChange={(e) => setAddFeedBack(e.target.value)}
            />
        </Box>
        <Box sx={{display:'flex', gap:'10px', alignItems:'center', bgcolor:"#E5F0FE", padding:"10px 20px", marginTop:'20px'}}>
            <Typography>
            תרצו לשמור את המשוב?
            </Typography>
            <FormGroup row>
                <FormControlLabel control={<Checkbox/>} label="כן" />
                <FormControlLabel required control={<Checkbox />} label="לא" />
            </FormGroup>
        </Box>
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', padding:"10px 20px", gap:'10px'}}>
            <Select
                sx={{width:"100%", margin:'20px 0'}}
                value={positiveChoosed}
                placeholder='בחירת משוב'
                onChange={(e) => setPositiveChoosed(e.target.value)}
            >
                {positive?.map((item,index) =>
                    <MenuItem 
                        key={index}
                        value={item?.value}
                    >
                        {item?.label}
                    </MenuItem>
                )}
            </Select> 
            <Select
                sx={{width:"100%"}}
                value={negativeChoosed}
                placeholder='בחירת משוב'
                onChange={(e) => setNegativeChoosed(e.target.value)}
            >
                {negative?.map((item,index) =>
                    <MenuItem
                        key={index}
                        value={item?.value}
                    >
                        {item?.label}
                    </MenuItem>
                )}
            </Select> 
        </Box>
        {isSavedBank && 
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', paddingTop:'50px'}}>
                <Box>
                    <Image src={'/images/feedbackBank.png'} width={200} height={150} alt='feedback' />
                    <Typography variant='body1' sx={{paddingTop:'20px'}}>
                    המשוב שכתבת נשמר בבנק המשובים שלך!
                    </Typography>
                </Box>
            </Box>
        }
        </>

    );
};

export default Create;