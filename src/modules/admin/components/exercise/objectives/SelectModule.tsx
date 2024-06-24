import React, {FC,useEffect} from 'react';
import ReactSelect from 'react-select'
import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import { FormControl, MenuItem, Select, styled } from '@mui/material';

const CustomSelect = styled(Select)(({ borderColor }: { borderColor: string }) => ({
    width: 250,
    height: 70,
    fontSize:'23px',
    '&.MuiOutlinedInput-root': {

      '& fieldset': {
        borderColor: borderColor,
      },
    },
    '& .MuiInputBase-input': {
      paddingTop: '38px',
    },
    '& .MuiSvgIcon-root': {
      top: '50%',
    },
  }));
  

const SelectModule:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
    const {setValue} = useAdminExercise()
    useEffect(() => {
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].isFullText`, objective.isFullText)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].moduleType`, objective.moduleType)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].orden`, objective.orden)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].placeholder`, objective.placeholder)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].values`, objective.values)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].answers`, objective.answers)
      }, []);


    return (
        <>
            <th className={`p-4 `} key={objectiveIndex} id={`${objective.id}`}>
                <FormControl>
                    <CustomSelect
                        placeholder={objective.placeholder}
                        borderColor={'#ced4da'}
                        value={objective?.answers[0]?.value}
                    >
                        <MenuItem value="">
                            <em>בחירה</em>
                        </MenuItem>
                        {objective?.values?.map((item, key) =>
                        <MenuItem value={item.value} key={key}>{item.value}</MenuItem>
                        )}
                    </CustomSelect>
                </FormControl>
            </th>
        </>
    );
};

export default SelectModule;