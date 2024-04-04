import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import { useStudentExercise } from '@/modules/student/provider/StudentExerciseProvider';
import React, {FC, useEffect} from 'react';

const OpenQuestion:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

    return (
        <th 
            // className={`${checkIsThereImage ? 'h-full justify-left text-center float-left' : 'h-full justify-lefttext-center float-left'} w-full`} 
            // style={{
            //     minWidth: isTable ? `${CustomTableWidth}px` : '',
            // }}
        >
            <div className='flex items-center py-4 px-2 w-full float-left'>
                <div className='rounded-md bg-white text-white px-2  float-left w-full'  >
                    {/* <RichTextEditor placholder={placeholder}/> */}
                    rich text editor
                </div>
            </div>
        </th>
    );
};

export default OpenQuestion;