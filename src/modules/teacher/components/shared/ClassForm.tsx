import React, {FC} from 'react';
import { Checkbox, FormControl, ListItemText, MenuItem, Select, SelectChangeEvent } from '@mui/material';

import useDataClass from '../../hooks/useDataClass';

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

interface ClassForm {
    handle: (arr: IClass[]) => void 
}

const ClassForm:FC<ClassForm> = ({handle}) => {
    const [personName, setPersonName] = React.useState<string[]>([]);

    const {data} = useDataClass()

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
    
        const selectedValues = typeof value === 'string' ? value.split(',') : value;
    
        setPersonName(selectedValues);
    
        if (Array.isArray(selectedValues)) {
            const findData = selectedValues.map((selectedTitle: string) => data?.find(item => item.title === selectedTitle));
            handle(findData as IClass[])
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
                    value={item.title}
                    sx={{
                        '&.Mui-selected': {
                            backgroundColor: '#F0FBFF',
                            color: '#0172E8' 
                        }
                    }}
                >
                    <Checkbox checked={personName.some((selected) => selected == item.title)}/>

                    <ListItemText primary={item.title} />
                </MenuItem>
            ))}
            </Select>
        </FormControl>
    );
};

export default ClassForm;