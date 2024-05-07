import React, {FC, useEffect} from 'react';


const HeadLine2:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {


    return (
        <th 
        // className={`
        // ${checkIsThereImage ? '' : ''}
        // `}
        // style={{
        //     minWidth: isTable ? `${CustomTableWidth}px` : '',
        // }}
        >
            <div className='text-center  px-4 py-4'>
                <div
                    // onInput={handleInputChange}
                    dangerouslySetInnerHTML={{ __html: objective.values[0]?.value }}
                    className=""
                />
            </div>
        </th>
    );
};

export default HeadLine2;