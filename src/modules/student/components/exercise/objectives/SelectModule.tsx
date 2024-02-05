import React, {FC,useEffect} from 'react';
import ReactSelect from 'react-select'
import { useStudentExercise } from '@/modules/student/provider/StudentExerciseProvider';

const SelectModule:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

    const {setValue} = useStudentExercise()
    useEffect(() => {
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].isFullText`, objective.isFullText)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].moduleType`, objective.moduleType)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].orden`, objective.orden)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].placeholder`, objective.placeholder)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].values`, objective.values)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].answers`, objective.answers)
      }, []);


    const optionsNew = Array.isArray(objective.values)
    ? objective.values.map((item) => ({ value: item.value, label: item.value }))
    : [];

    return (
        <>
            <th className={`p-4`}>
                <ReactSelect
                placeholder={objective.placeholder}
                options={optionsNew}
                value={{value:objective?.answers[0].value, label:objective?.answers[0].value}}
                />
            </th>
        </>
    );
};

export default SelectModule;