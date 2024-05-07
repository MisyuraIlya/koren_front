import React, {FC, useEffect, useState} from 'react';

const SongModule:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {



    
    //   const isDisabledTh = collectionsCols.some((item) => item.orden === col + 1 && item.title == 'h')
    return (
        <th 
        // className={`
        // relative
        // text-[23px]
        // ${isDisabledTh && 'disbleTh'}
        // ${checkIsThereImage ? '' : ''}
        // w-full
        // `}
        
        // style={{
        //     verticalAlign: 'top', // Align text to the top
        //     textAlign: 'right',   // Align text to the right
        //     minWidth: isTable ? `${CustomTableWidth}px` : '',
        // }}
        
        >
            {/* {!isOnlineXml &&
                <BoldChanger html={htmlTag} handleUpdateHtml={handleUpdateHtml}/>
            } */}

            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}} className='pt-5 pb-5'>
                <div 
                // style={{width:`${songPropetries}%`}}
                >
                    <div className=' py-4 fontSizeExercise bg-white shadow-xl shadow-black/10 rounded-sm px-9 text-justify '>
                        <div
                            // onInput={handleInputChange}
                            dangerouslySetInnerHTML={{ __html: objective?.values[0]?.value }}
                            className=""
                        />
                    </div>
                </div>
            </div>

        </th>
    );
};

export default SongModule;