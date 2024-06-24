import React, {FC, useEffect,useRef, useState} from 'react';
import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';


const TextAreaModule2: FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const {setValue} = useAdminExercise()
  useEffect(() => {
      setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].isFullText`, objective.isFullText)
      setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].moduleType`, objective.moduleType)
      setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].orden`, objective.orden)
      setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].placeholder`, objective.placeholder)
      setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].values`, objective.values)
      setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].answers`, objective.answers)
  }, [tabIndex,taskIndex,rowIndex,objectiveIndex,objective]);


  return (
    <th className='disbleTh'>
      <label
        className="input-sizer stacked bg-white"
      >
        <textarea
          ref={textareaRef}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            (target.parentNode as HTMLElement).dataset.value = target.value;
          }}
          rows={1}
        ></textarea>
      </label>
    </th>
  );
};

export default TextAreaModule2;
