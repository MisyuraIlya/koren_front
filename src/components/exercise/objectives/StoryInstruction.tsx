import Image from 'next/image';
import React, {FC, useEffect} from 'react';

const StoryInstruction:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {


    return (
        <th className='text-right text-white py-4 disbleTh'>
            <div className='flex items-center mr-5 justify-center '>
                <h4
                style={{ fontSize: '30px', fontWeight: '600', paddingTop: '10px' }}
                dangerouslySetInnerHTML={{ __html: objective?.values[0]?.value }}
                />
            </div>
        </th>
    );
};

export default StoryInstruction;