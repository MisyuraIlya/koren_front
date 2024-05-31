import { useFeedBack } from '@/store/feedBack.store';
import { MenuItem, Select } from '@mui/material';
import React from 'react';

const SelectMode = () => {

    const {mode,choosedMode,setChoosedMode} = useFeedBack()
    return (
        <>
        <Select
            sx={{width:"100%"}}
            value={choosedMode}
            placeholder='בחירת משוב'
            onChange={(e) => setChoosedMode(e.target.value)}
        >
                <MenuItem value={''}>בחירת משוב</MenuItem>
            {mode?.map((item,index) =>
                <MenuItem 
                    key={index}
                    value={item?.value}
                >
                    {item?.label}
                </MenuItem>
            )}
        </Select> 
        </>
    );
};

export default SelectMode;