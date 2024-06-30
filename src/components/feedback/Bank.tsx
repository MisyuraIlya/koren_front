import { Box, Button, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';
import BankCard from './BankCard';
import { useFeedBackStore } from '@/store/feedBack.store';
import useDataFeedBack from '@/hooks/useDataFeedBack';
import { Padding } from '@mui/icons-material';

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

const Bank = () => {
    const [value, setValue] = useState(0);
    const {data} = useDataFeedBack()
    const {addFeedBack,setAddFeedBack} = useFeedBackStore()

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

  

    return (
        <>
        { !addFeedBack ?
          <Box sx={{bgcolor:'white',padding:'10px 5px', margin:'20px', maxHeight:'430px', overflow:'auto'}}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="משובים חיוביים"/>
              <Tab label="משובים לשיפור הלמידה"/>
            </Tabs>
            <CustomTabPanel value={value} index={0}>
                <List>
                    {data?.map((item) => {
                      if(item.type === 'positive') {
                        return(
                          <>
                          <BankCard item={item}/>
                          </>
                        )
                      }
                    })}
                </List> 
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <List>
                    {data?.map((item) => {
                      if(item.type === 'negative') {
                        return(
                          <>
                          <BankCard item={item}/>
                          </>
                        )
                      }
                    })}
                </List> 
            </CustomTabPanel>
          </Box> 
        :
          <Box sx={{padding:'20px'}}>
              <Typography>
              בחרת במשוב הבא:
              </Typography>
              <Box sx={{bgcolor:'#E5F0FE', padding:'20px 0'}}>
                  <Typography  sx={{textAlign:'center'}}>
                  {addFeedBack}
                  </Typography>
                  <Box sx={{display:'flex', gap:'10px', justifyContent:'center', alignItems:'center', paddingTop:'30px'}}>
                      <Button variant='contained' sx={{bgcolor:'#0172E8',borderRadius:'24px', padding:'6px 44px', fontSize:'16px', fontWeight:600}} onClick={() => setAddFeedBack('')}>
                      ביטול
                      </Button>
                  </Box>
              </Box>
          </Box>
        }
        </>

    );
};

export default Bank;