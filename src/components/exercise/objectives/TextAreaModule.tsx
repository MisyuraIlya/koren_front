import React, {FC, useEffect,useRef, useState} from 'react';


const TextAreaModule2: FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
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
