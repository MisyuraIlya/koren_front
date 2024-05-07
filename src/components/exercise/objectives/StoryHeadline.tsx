import React, {FC, useEffect} from 'react';

const StoryHeadline:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {



    return (
        <div >
            <div className='font-bold pt-6 px-4' style={{fontSize:'30px'}} dangerouslySetInnerHTML={{ __html: objective?.values[0]?.value }}/>
        </div>
    );
};

export default StoryHeadline;