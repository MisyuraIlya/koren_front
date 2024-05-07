import React, {FC, useEffect, useState} from 'react';

const InstructionWhite:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {





    //   const isDisabledTh = collectionsCols.some((item) => item.orden === col + 1 && item.title == 'h')
    return (
        <th 
        style={{
            background:objective?.moduleType === 'instructionWhite' ? 'white' : ''
        }}
        // className={`
        // relative
        // text-[23px]
        // bg-white
        // ${isDisabledTh && 'disbleTh'}
        // ${checkIsThereImage ? '' : ''}
        // `}
        
        // style={{
        //     verticalAlign: 'top', // Align text to the top
        //     textAlign: 'right',   // Align text to the right
        //     minWidth: isTable ? `${CustomTableWidth}px` : '',
        //     paddingRight:paddingRight ? `${paddingRight}px` : '', paddingLeft:paddingLeft ? `${paddingLeft}px` : ''
        // }}
        
        >
            {/* {!isOnlineXml &&
                <BoldChanger html={htmlTag} handleUpdateHtml={handleUpdateHtml}/>
            } */}

            <div className='text-right  px-4 py-4 fontSizeExercise ' 
                        // style={choosedModule ? 
                            // {width:widthText ? `${widthText}%` : '100%', marginRight:textMargin ? `${textMargin}%` : ''}:
                            // {width:widthText ? `${widthText}%` : '100%',marginRight: textMargin ? `${textMargin}%` : ''}}
            >
                <div
                    // onInput={handleInputChange}
                    dangerouslySetInnerHTML={{ __html: objective.values[0]?.value }}
                    // style={{ textAlign: textAlign === 'אמצע' ? 'center' : undefined, whiteSpace: whiteSpace === 'לא' ? 'nowrap' : undefined}}
                    className=""
                />
            </div>
        </th>
    );
};

export default InstructionWhite;