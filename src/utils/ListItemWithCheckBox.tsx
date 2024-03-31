import React, { FC } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Checkbox, Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

interface ListItemWithCheckBoxProps {
    title: string;
    arr: Array<{ value: string; label: string }>;
    selectedArr: Array<{ value: string; label: string }>;
    handleClickValue: (value: string) => void
}

const ListItemWithCheckBox: FC<ListItemWithCheckBoxProps> = ({ title, arr, selectedArr, handleClickValue }) => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListItemButton onClick={handleClick} sx={{ border: '1px solid #F3F6F9' }}>
                <ListItemText primary={title} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {arr?.map((student) => (
                        <ListItemButton sx={{ pl: 1, border: '1px solid #F3F6F9', background: '#F0FBFF' }} key={student.value}>
                            <Checkbox checked={selectedArr.some((selected) => selected.value === student.value)} onChange={() => handleClickValue(student.value)}/>
                            <ListItemText primary={student.label} sx={{ color: '#0172E8' }} />
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>
        </>
    );
};

export default ListItemWithCheckBox;
