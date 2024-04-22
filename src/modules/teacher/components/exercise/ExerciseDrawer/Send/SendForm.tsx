'use client'
import { useTeacherWork } from '@/modules/teacher/store/work.store';
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, styled, Tooltip } from '@mui/material';
import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';

// const ProSpan = styled('span')({
//     display: 'inline-block',
//     height: '1em',
//     width: '1em',
//     verticalAlign: 'middle',
//     marginLeft: '0.3em',
//     marginBottom: '0.08em',
//     backgroundSize: 'contain',
//     backgroundRepeat: 'no-repeat',
//     backgroundImage: 'url(https://mui.com/static/x/pro.svg)',
//   })

const SendForm = () => {
    const {sendType,setSendType} = useTeacherWork()

    // function Label({
    //     componentName,
    //     valueType,
    //     isProOnly,
    //   }: {
    //     componentName: string;
    //     valueType: string;
    //     isProOnly?: boolean;
    //   }) {
    //     const content = (
    //       <span>
    //         <strong>{componentName}</strong> for {valueType} editing
    //       </span>
    //     );
      
    //     if (isProOnly) {
    //       return (
    //         <Stack direction="row" spacing={0.5} component="span">
    //           <Tooltip title="Included on Pro package">
    //             <a
    //               href="https://mui.com/x/introduction/licensing/#pro-plan"
    //               aria-label="Included on Pro package"
    //             >
    //               {/* <ProSpan /> */}
    //             </a>
    //           </Tooltip>
    //           {content}
    //         </Stack>
    //       );
    //     }
      
    //     return content;
    //   }

    return (
        <FormControl>
            <FormLabel sx={{color:'black'}}>סוג התרגיל:</FormLabel>
            <RadioGroup
                value={sendType}
                onChange={(e) => setSendType(e.target.value as sendExerciseType)}
            >
                <FormControlLabel value="exercise" control={<Radio />} label="תרגול - ללא תזמון" />
                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                        components={[
                        'DatePicker',
                        ]}
                    >
                            <DemoItem label={<Label componentName="DatePicker" valueType="date" />}>
                            <DatePicker />
                            </DemoItem>
                        </DemoContainer>
                </LocalizationProvider> */}
    
                <FormControlLabel value="test" control={<Radio />} label="מבדק" />
                <FormControlLabel value="exam" control={<Radio />} label="מבחן" />
            </RadioGroup>
            <Button variant='contained'>
                שליחה
            </Button>
        </FormControl>
    );
};

export default SendForm;