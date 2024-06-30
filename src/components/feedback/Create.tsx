import useDataFeedBack from '@/hooks/useDataFeedBack';
import { useFeedBackStore } from '@/store/feedBack.store';
import ReachTextEditor from '@/utils/ReachTextEditor';
import { Box, Card, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const Create = () => {

    const { choosedFeedBack,toSaveFeedBack, typeChoosed, setTypeChoosed, setToSaveFeedBack, setChoosedFeedBack, setIsSavedBank ,isSavedBank, setAddFeedBack, addFeedBack} = useFeedBackStore()
    const {data} = useDataFeedBack()

    const handleChoose = (value: string) => {
        setChoosedFeedBack(value)
        setAddFeedBack(value)
    }

    return (
        <>
        <Box sx={{padding:'20px 20px'}}>
            {/* <ReachTextEditor value={addFeedBack} setValue={setAddFeedBack}/> */}
            <TextField 
                fullWidth
                label="משוב"
                multiline 
                rows={4} 
                value={addFeedBack} 
                onChange={(e) => setAddFeedBack(e.target.value)}
            />
        </Box>

        {(toSaveFeedBack && !typeChoosed ) &&
            <Box sx={{ bgcolor:'#002536D9', position:'fixed', display:'flex', alignItems:'center', height:'100%', width:'100%', zIndex:99}}>
                <Card sx={{width:'400px', padding:'50px 30px', marginLeft:'30px', marginBottom:'150px'}}>
                    <Box>
                        <Typography variant='h5' textAlign={'center'} sx={{padding:'20px 0'}}>
                        האם זה משוב חיובי או שלילי?
                        </Typography>
                        <Box sx={{display:'flex', gap:'20px', justifyContent:'center'}}>
                            <Box sx={{bgcolor:'#52C41A9E',borderRadius:'8px', height:'83px', width:'135px', cursor:'pointer'}} onClick={() => setTypeChoosed('positive')}>
                                <Box sx={{alignItems:'center', display:'flex', justifyContent:'center'}}>
                                    <CheckIcon sx={{width:'50px', height:'50px'}}/>
                                </Box>
                                <Typography sx={{textAlign:'center'}} fontSize={'22px'} fontWeight={600}>
                                    חיובי
                                </Typography>
                            </Box>
                            <Box sx={{bgcolor:'#EC680F7D',borderRadius:'8px', height:'83px', width:'135px', cursor:'pointer'}} onClick={() => setTypeChoosed('negative')}>
                                <Box sx={{alignItems:'center', display:'flex', justifyContent:'center'}}>
                                    <ClearIcon sx={{width:'50px', height:'50px'}}/>
                                </Box>
                                <Typography sx={{textAlign:'center'}} fontSize={'22px'} fontWeight={600}>
                                    שלילי
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Card>
            </Box>
        }

        {isSavedBank ?  
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', paddingTop:'50px'}}>
                <Box>
                    <IconButton onClick={() => setIsSavedBank(false)}>
                        <ClearIcon/>
                    </IconButton>
                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <Image src={'/images/feedbackBank.png'} width={200} height={150} alt='feedback' />
                    </Box>
                    <Typography variant='body1' sx={{paddingTop:'20px'}} fontWeight={700}>
                    המשוב שכתבת נשמר בבנק המשובים שלך!
                    </Typography>
                </Box>
            </Box>

            :
            <>
                <Box sx={{display:'flex', gap:'10px', alignItems:'center', bgcolor:"#E5F0FE", padding:"10px 20px", marginTop:'20px'}}>
                    <Typography>
                    תרצו לשמור את המשוב?
                    </Typography>
                    <FormGroup row>
                        <FormControlLabel  control={<Checkbox checked={toSaveFeedBack} onClick={() => setToSaveFeedBack(true)}/>} label="כן" />
                        <FormControlLabel  required control={<Checkbox checked={!toSaveFeedBack} onClick={() => setToSaveFeedBack(false)}/>} label="לא" />
                    </FormGroup>
                </Box>
                <Grid container spacing={2} sx={{padding:'30px 20px', maxHeight:'200px', overflow:'auto'}}>
                    {data?.map((bank,index) =>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor={`grouped-select-${index}`}>{bank.title}</InputLabel>
                                <Select
                                id={`grouped-select-${index}`}
                                sx={{ width: "100%"}}
                                value={choosedFeedBack}
                                label={bank.title}
                                onChange={(e) => handleChoose(e.target.value)}
                                displayEmpty
                                >
                                <MenuItem disabled value="">
                                    <em>{bank.title}</em>
                                </MenuItem>
                                {bank?.items?.map((item, index) =>
                                    <MenuItem
                                    key={index}
                                    value={item?.title}
                                    >
                                    {item?.title}
                                    </MenuItem>
                                )}
                                </Select>
                            </FormControl>
                        </Grid>
                    )}
                </Grid>
            </>
          
        }
        </>

    );
};

export default Create;