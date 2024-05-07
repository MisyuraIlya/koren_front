import React, {FC, useEffect,useRef, useState} from 'react';


const TextAreaModule2: FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);




  // useEffect(() => {
  //   const textarea = textareaRef.current;

  //   if (textarea) {
  //       const newHeight = textarea.scrollHeight + 'px';
  //       const tableRow = textarea.parentNode!.parentNode! as HTMLTableRowElement;
  //       tableRow.style.height = newHeight;
  //     }

  // }, [col, row, setValue, exerciseId, dataObjectId, placeholder, answer]);



  return (
    <th className='disbleTh'>
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
