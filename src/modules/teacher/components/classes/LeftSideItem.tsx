import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const LeftSideItem = ({classItem}: {classItem: IClass}) => {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(!open);
    };

    return (
        <>
            <ListItemButton onClick={handleClick} sx={{border:'1px solid #F3F6F9'}}>
                <ListItemText primary={`כיתה ${classItem.title}`} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {classItem?.students?.map((student) =>
                    <ListItemButton sx={{ pl: 4, border:'1px solid #F3F6F9', background:'#F0FBFF'}}>
                        <ListItemText primary={student.firstName + ' ' + student.lastName} sx={{color:'#0172E8'}}/>
                    </ListItemButton>
                    )}
                </List>
            </Collapse>   
        </>
    );
};

export default LeftSideItem;