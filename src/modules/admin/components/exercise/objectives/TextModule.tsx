import React, {FC, useEffect, useState} from 'react';
type TextModuleProps = {
    objective: IObjective
}
const TextModule:FC<TextModuleProps> = ({objective}) => {

    // let formattedValue = value?.replaceAll('#', "&nbsp;&nbsp;&nbsp;&nbsp;");
    // let formattedValue = value?.replaceAll('$$$$', "&nbsp;&nbsp;&nbsp;&nbsp;").replaceAll('@', "<br/>");
    // const [htmlTag, setHtmlTal] = useState<string>(objective.a)
    // const handleUpdateHtml = (updatedHtml: string) => {
    //     setHtmlTal(updatedHtml)
    // }

    // useEffect(() => {
    //     setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
    //     setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'text');
    //     setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
    //     setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value: htmlTag}]);
    //     setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
    //   }, [col, row, setValue,exerciseId, dataObjectId, value, htmlTag, tab]);

    
    //   const isDisabledTh = collectionsCols.some((item) => item.orden === col + 1 && item.title == 'h')
    return (
        <th className={`
        relative
        text-[23px]

        `}
        
        style={{
            verticalAlign: 'top', // Align text to the top
            textAlign: 'right',   // Align text to the right
        }}
        
        >
            {/* {!isOnlineXml &&
                <BoldChanger html={htmlTag} handleUpdateHtml={handleUpdateHtml}/>
            } */}

            <div className=' px-2 py-4 fontSizeExercise text-justify'
            // style={choosedModule ? {paddingLeft:'70px'}: {}}
            >
                <div
                    // onInput={handleInputChange}
                    dangerouslySetInnerHTML={{ __html: objective?.values[0].value }}
                    className=""
                />
            </div>
        </th>
    );
};

export default TextModule;