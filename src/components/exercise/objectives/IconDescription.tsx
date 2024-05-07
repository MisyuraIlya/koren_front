import React, {FC, useEffect} from 'react';


const IconDescription:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {


    return (
        <div className='px-4 pt-5 pb-7  text-white font-medium text-xl'  dangerouslySetInnerHTML={{ __html: objective.values?.[0]?.value }}/>
    );
};

export default IconDescription;