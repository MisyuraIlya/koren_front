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


  // useEffect(() => {
  //   const textarea = textareaRef.current;

  //   if (textarea) {
  //       const newHeight = textarea.scrollHeight + 'px';
  //       const tableRow = textarea.parentNode!.parentNode! as HTMLTableRowElement;
  //       tableRow.style.height = newHeight;
  //     }

  // }, [col, row, setValue, exerciseId, dataObjectId, placeholder, answer]);



  return (
    <th >
      <label
        className="input-sizer stacked bg-white"
        // style={
        //   (tableWidth1 && index === 2) || (tableWidth2 && index === 3)
        //     ? {
        //         width: (tableWidth1 && index === 2  || (tableWidth2 && index === 3) )? `${tableWidth1 || tableWidth2}px` : `350px`,
        //       }
        //     : {
        //         width: textAreaWidth ? `${textAreaWidth}px` : '350px',
        //       }
        // }
      >
        <textarea
          ref={textareaRef}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            (target.parentNode as HTMLElement).dataset.value = target.value;
          }}
          // value={ExerciseMethods?.handleGetCopyAnswer(col,row)}
          rows={1}
          // placeholder={placeholder}
          // onChange={(e) => ExerciseMethods?.handleChangeCopyAnswer({answer:e.target.value, row, col}) }
        ></textarea>
      </label>
    </th>
  );
};

export default TextAreaModule2;
