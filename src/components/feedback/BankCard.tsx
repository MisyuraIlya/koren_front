import React, {FC, useState} from 'react';
import { Button, Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useFeedBack } from '@/store/feedBack.store';

interface BankCardProps {
    item: IFeedBack
}

const BankCard:FC<BankCardProps> = ({item}) => {
    const [open,setOpen] = useState(false)
    const { setChoosedFeedBack, choosedFeedBack, addFeedBack, setAddFeedBack } = useFeedBack()
    return (
        <>
        <ListItemButton onClick={() => setOpen(!open)}>
            <ListItemText primary={item.title}/>
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {item?.items?.map((element) => 
                <>
                    <ListItemButton sx={{ pl: 4, bgcolor: choosedFeedBack === element?.title ? '#E5F0FE' : 'white'}} onClick={() => setChoosedFeedBack(element.title)}>
                        <ListItemText primary={element?.title}/>
                        {choosedFeedBack === element?.title &&
                            <Button sx={{color:'#1890FF',fontWeight:900}} onClick={() => setAddFeedBack(element?.title)}>
                                הוספה
                            </Button>
                        }
                    </ListItemButton> 
                    <Divider/>
                </>
                )}
            </List>
        </Collapse>
        </>
    );
};

export default BankCard;