import React, {FC} from 'react';
import { Checkbox, FormControl, ListItemText, MenuItem, Select, SelectChangeEvent } from '@mui/material';

import useDataClass from '../../hooks/useDataClass';
import useDataTeachers from '../../hooks/useDataTeachers';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface TeacherForm {
    handle: (arr: IUser[]) => void 
}

const TeacherForm:FC<TeacherForm> = ({handle}) => {
    const [personName, setPersonName] = React.useState<string[]>([]);

    const {data} = useDataTeachers()
    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
    
        const selectedValues = typeof value === 'string' ? value.split(',') : value;
    
        setPersonName(selectedValues);
    
        if (Array.isArray(selectedValues)) {
            const findData = selectedValues.map((selectedTitle: string) => data?.find(item => item.firstName + ' ' + item.lastName === selectedTitle));
            handle(findData as IUser[])
        }
        
    };

    return (
        <FormControl fullWidth sx={{marginTop:'20px'}}>
            <Select
            multiple
            value={personName}
            
            onChange={handleChange}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
            >
            {data?.map((item,index) => (
                <MenuItem
                    key={index} 
                    value={item.firstName + ' ' + item.lastName}
                    sx={{
                        '&.Mui-selected': {
                            backgroundColor: '#F0FBFF',
                            color: '#0172E8' 
                        }
                    }}
                >
                    <Checkbox checked={personName.some((selected) => selected == item.firstName + ' ' + item.lastName)}/>

                    <ListItemText primary={item.firstName + ' ' + item.lastName} />
                </MenuItem>
            ))}
            </Select>
        </FormControl>
    );
};

export default TeacherForm;