import { Box, Button, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';
import BankCard from './BankCard';
import { useFeedBack } from '@/store/feedBack.store';

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
  }

const test = [
    {
        id:1,
        title:"test",
        items: [
            {id:1,title:"value 1"},
            {id:2,title:"value 2"},
            {id:3,title:"value 3"},
        ]
    },
    {
        id:2,
        title:"test 2",
        items: [
            {id:1,title:"value 1"},
            {id:2,title:"value 2"},
            {id:3,title:"value 3"},
        ]
    }
]


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

    const {addFeedBack,setAddFeedBack} = useFeedBack()

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
        <>
        { !addFeedBack ?
          <>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="משובים חיוביים"/>
              <Tab label="משובים לשיפור הלמידה"/>
            </Tabs>
            <CustomTabPanel value={value} index={0}>
                <List>
                    {test?.map((item) => 
                    <>
                    <BankCard item={item}/>
                    </>
                    )}
                </List> 
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
          </> 
        :
          <Box>
              <Typography>
              בחרת במשוב הבא:
              </Typography>
              <Box sx={{bgcolor:'#E5F0FE', padding:'20px 0'}}>
                  <Typography  sx={{textAlign:'center'}}>
                  בסיום יש הצעה מעניינת לפתרון.
                  </Typography>
                  <Box sx={{display:'flex', gap:'10px', justifyContent:'center', alignItems:'center', paddingTop:'30px'}}>
                      <Button variant='contained' sx={{bgcolor:'#0172E8',borderRadius:'24px', padding:'6px 44px', fontSize:'16px', fontWeight:600}}>
                      אישור
                      </Button>
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