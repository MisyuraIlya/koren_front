import React,{FC} from 'react';

interface ObjectivesProps {
    objective: IObjective
}
const Objectives:FC<ObjectivesProps> = ({objective}) => {
    return (
        <>
            {/* {objective?.moduleType === 'input' && <InputModule  tab={tab} CustomInputWidth={CustomInputWidth} CustomTableWidth={CustomTableWidth}isMerged={row?.isMerged} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} key={index} id={row.id} answer={row.collectionAnswers} placeholder={row.placeholder || ''}  register={register} col={orden} row={row.orden} setValue={setValue} isFullText={row.isFullText} />}
            {objective?.moduleType === 'inputCentered' && <InputCenteredModule tab={tab} CustomInputWidth={CustomInputWidth} CustomTableWidth={CustomTableWidth}isMerged={row?.isMerged} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} key={index} id={row.id} answer={row.collectionAnswers} placeholder={row.placeholder || ''}  register={register} col={orden} row={row.orden} setValue={setValue} isFullText={row.isFullText} />}
            {objective?.moduleType === 'instruction' && <Instruction tab={tab} checkIsIcon={checkIsIcon}CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} setValue={setValue} value={row.collectionValues[0].value} col={orden} row={row.orden} register={register} />}
            {objective?.moduleType === 'orden' && <OrdenModule tab={tab} index={index} isExplanationRowSplited={isExplanationRowSplited} CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value} />}
            {objective?.moduleType === 'ordenBold' && <OrdenBoldModule tab={tab} isExplanationRowSplited={isExplanationRowSplited} CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value} />}
            {objective?.moduleType === 'selectbox' && <SelectModule tab={tab} CustomSelectBoxWidth={CustomSelectBoxWidth} CustomTableWidth={CustomTableWidth}  isMerged={row?.isMerged} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} exerciseId={exerciseId} dataObjectId={dataObjectId} key={index} placeholder={row.placeholder || ''} options={row.collectionValues} answer={row.collectionAnswers} register={register}   col={orden} row={row.orden} setValue={setValue} control={control} />}
            {objective?.moduleType === 'subInstruction' && <SubInstruction tab={tab} CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value} />}
            {objective?.moduleType === 'text' && <TextModule tab={tab} CustomTableWidth={CustomTableWidth} collectionsCols={collectionsCols} firstIdTextModule={firstIdTextModule} isTable={isTable} isClearTable={isClearTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}
            {objective?.moduleType === 'textModuled' && <TextModuled tab={tab} whiteSpace={whiteSpace} textAlign={textAlign} paddingRight={paddingRight} paddingLeft={paddingLeft} textBgColor={textBgColor} textMargin={textMargin} widthText={widthText} CustomTableWidth={CustomTableWidth} collectionsCols={collectionsCols} firstIdTextModule={firstIdTextModule} isTable={isTable} isClearTable={isClearTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}
            {objective?.moduleType === 'textCentered' && <TextModuleCentered tab={tab} CustomTableWidth={CustomTableWidth} collectionsCols={collectionsCols} firstIdTextModule={firstIdTextModule} isTable={isTable} isClearTable={isClearTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}
            {objective?.moduleType === 'rootInput' && <RootInputModule tab={tab} CustomTableWidth={CustomTableWidth} isMerged={row?.isMerged} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} key={index} exerciseId={exerciseId} id={row.id} answer={row.collectionAnswers} placeholder={row.placeholder || ''}  register={register} col={orden} row={row.orden} setValue={setValue} isFullText={row.isFullText}/>}
            {objective?.moduleType === 'explanationSplited' && <ExplanationSplited tab={tab} CustomTableWidth={CustomTableWidth} collectionsCols={collectionsCols} firstIdTextModule={firstIdTextModule} isTable={isTable} isClearTable={isClearTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}
            {objective?.moduleType === 'explanation' && <Explanation tab={tab} CustomTableWidth={CustomTableWidth}  isTable={isTable}   checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}
            {objective?.moduleType === 'word' && <WordModule tab={tab} isIcon1={isIcon1} isIcon2={isIcon2} index={index} isStoryInstruction={isStoryInstruction} isExplanationRowSplited={isExplanationRowSplited} CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row?.collectionValues[0]?.value}/>}
            {objective?.moduleType === 'wordBold' && <WordBoldModule tab={tab} isExplanationRowSplited={isExplanationRowSplited} CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row?.collectionValues[0]?.value}/>}
            {objective?.moduleType === 'mix' && <MixModule/>}
            {objective?.moduleType === 'bank' && <BankModule tab={tab} CustomTableWidth={CustomTableWidth}  isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} values={row.collectionValues} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} />}
            {objective?.moduleType === 'mixDrag' && <MixDrag tab={tab} CustomTableWidth={CustomTableWidth}  isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionAnswers[0].value}/>}
            {objective?.moduleType === 'checkBox' && <CheckBoxModule tab={tab} CustomTableWidth={CustomTableWidth}  isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} values={row.collectionValues} answer={row.collectionAnswers}/>}

            {objective?.moduleType === 'imageRight' && <ImageFormRight tab={tab} CustomTableWidth={CustomTableWidth}  isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionAnswers[0]?.value}/>}
            {objective?.moduleType === 'imageLeft' && <ImageFormLeft tab={tab} CustomTableWidth={CustomTableWidth}  isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionAnswers[0]?.value}/>}
            {objective?.moduleType === 'video' && <VideoForm  tab={tab} CustomTableWidth={CustomTableWidth}  isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue}/>}
            {objective?.moduleType === 'chart' && <ChartForm tab={tab} CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue}/>}
            {objective?.moduleType === 'merged' && <UnitedForm tab={tab} CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0]?.value}/>}
            {objective?.moduleType === 'table' && <TableModule tab={tab} CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0]?.value}/>}
            {objective?.moduleType === 'tableClear' && <TableClearModule tab={tab} CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0]?.value}/>}
            {objective?.moduleType === 'openQuestion' && <OpenQuestion tab={tab} CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} placeholder={row.placeholder || ''}/>}
            {objective?.moduleType === 'mergedExercise' && <MergedExercise tab={tab} CustomTableWidth={CustomTableWidth} mergedData={mergedData} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} control={control}/>}
            {objective?.moduleType === 'textCopy' && <TextCopy tab={tab} CustomTableWidth={CustomTableWidth} collectionsCols={collectionsCols} firstIdTextModule={firstIdTextModule} isTable={isTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}
            {objective?.moduleType === 'headline2' && <HeadLine2 tab={tab} CustomTableWidth={CustomTableWidth} firstIdTextModule={firstIdTextModule} isTable={isTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}
            {objective?.moduleType === 'numberBold' && <NumberBold tab={tab} CustomTableWidth={CustomTableWidth} firstIdTextModule={firstIdTextModule} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value} isClearTable={false} collectionsCols={collectionsCols}/>}
            {objective?.moduleType === 'clearText' && <ClearText tab={tab} collectionsCols={collectionsCols} isClearTable={isClearTable} CustomTableWidth={CustomTableWidth} firstIdTextModule={firstIdTextModule} isTable={isTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}
            {objective?.moduleType === 'icon1' && <IconModule tab={tab} collectionsCols={collectionsCols} isClearTable={isClearTable} CustomTableWidth={CustomTableWidth} firstIdTextModule={firstIdTextModule} isTable={isTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}
            {objective?.moduleType === 'icon2' && <IconSecondModule tab={tab} collectionsCols={collectionsCols} isClearTable={isClearTable} CustomTableWidth={CustomTableWidth} firstIdTextModule={firstIdTextModule} isTable={isTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}
            {objective?.moduleType === 'typedInput' && <TypedInput tab={tab} CustomTableWidth={CustomTableWidth} isMerged={row?.isMerged} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} key={index} id={row.id} answer={row.collectionAnswers} placeholder={row.placeholder || ''}  register={register} col={orden} row={row.orden} setValue={setValue} isFullText={row.isFullText} />}
            {objective?.moduleType === 'openQuestionHamarot' && <OpenQuestionHamarot tab={tab} CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} answer={row.collectionAnswers} placeholder={row.placeholder || ''}/>}
            {objective?.moduleType === 'draftBank' && <DraftBank tab={tab} CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} values={row.collectionValues} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue}  />}
            {objective?.moduleType === 'draft' && <Draft tab={tab} CustomTableWidth={CustomTableWidth} draftBankCollectionValues={draftBankCollectionValues}  isTable={isTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/> }
            {objective?.moduleType === 'heightSpace' && <HeightSpace tab={tab} CustomTableWidth={CustomTableWidth}  isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionAnswers[0]?.value}/>}
            {objective?.moduleType === 'properties' && <Properties tab={tab} CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/> }


            {objective?.moduleType === 'storyInstruction' && <StoryInstruction tab={tab} CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0]?.value}/> }
            {objective?.moduleType === 'storyHeadline' && <StoryHeadline tab={tab} CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0]?.value}/> }
            {objective?.moduleType === 'origin' && <OriginModule tab={tab} paddingRight={paddingRight} paddingLeft={paddingLeft} textBgColor={textBgColor} textMargin={textMargin} widthText={widthText} CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0]?.value} />}
            {objective?.moduleType === 'divider' && <Divider tab={tab} checkIsIcon={checkIsIcon}CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} setValue={setValue} value={''} col={orden} row={row.orden} register={register} />}
            {objective?.moduleType === 'mainHead' && <MainHead tab={tab} checkIsIcon={checkIsIcon}CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} setValue={setValue} value={row.collectionValues[0].value} col={orden} row={row.orden} register={register} />}
            {objective?.moduleType === 'secondHead' && <SecondHead tab={tab} paddingRight={paddingRight} paddingLeft={paddingLeft} textBgColor={textBgColor} textMargin={textMargin} widthText={widthText} checkIsIcon={checkIsIcon}CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} setValue={setValue} value={row.collectionValues[0].value} col={orden} row={row.orden} register={register} />}
            {objective?.moduleType === 'instructionWhite' && <InstructionWhite tab={tab} whiteSpace={whiteSpace} textAlign={textAlign} paddingRight={paddingRight} paddingLeft={paddingLeft} textBgColor={textBgColor} textMargin={textMargin} widthText={widthText} CustomTableWidth={CustomTableWidth} collectionsCols={collectionsCols}  isTable={isTable} isClearTable={isClearTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}
            {objective?.moduleType === 'wordRegular' && <WordRegular tab={tab} index={index} isStoryInstruction={isStoryInstruction} isExplanationRowSplited={isExplanationRowSplited} CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row?.collectionValues[0]?.value}/>}
            {objective?.moduleType === 'secondHeadWhite' && <SecondHeadWhiteModule tab={tab} checkIsIcon={checkIsIcon}CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} setValue={setValue} value={row.collectionValues[0].value} col={orden} row={row.orden} register={register} />}
            {objective?.moduleType === 'iconDescriptionOne' && <IconDescriptionOne tab={tab} CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0]?.value} />}
            {objective?.moduleType === 'iconDescriptionTwo' && <IconDescriptionTwo tab={tab} CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0]?.value} />}
            {objective?.moduleType === 'circle' && <CircleModule tab={tab} collectionsCols={collectionsCols} isClearTable={isClearTable} CustomTableWidth={CustomTableWidth} firstIdTextModule={firstIdTextModule} isTable={isTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}
            
            {objective?.moduleType === 'overflow' && <ToggleModule tab={tab} CustomTableWidth={CustomTableWidth}  isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0]?.value}/>}
            {objective?.moduleType === 'splitedScreenRight' && <SplitedScreenRight tab={tab} CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0]?.value}/> }
            {objective?.moduleType === 'doneSplitedScreenRight' && <DoneSplitedScreenRight tab={tab} CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0]?.value}/> }
            {objective?.moduleType === 'splitedScreenLeft' && <SplitedScreenLeft tab={tab} CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0]?.value}/> }
            {objective?.moduleType === 'doneSplitedScreenLeft' && <DoneSplitedScreenLeft tab={tab} CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0]?.value}/> }
            {objective?.moduleType === 'song' && <SongModule tab={tab} songPropetries={songPropetries} CustomTableWidth={CustomTableWidth} collectionsCols={collectionsCols}  isTable={isTable} isClearTable={isClearTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}
            {objective?.moduleType === 'textArea' && <TextAreaModule2 copyType={copyType} index={index} tableWidth2={tableWidth2} tableWidth1={tableWidth1} tab={tab} textAreaWidth={textAreaWidth} CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} answer={row.collectionAnswers} placeholder={row.placeholder || ''}/>}
            {objective?.moduleType === 'pdf' && <PdfModule  tab={tab} CustomTableWidth={CustomTableWidth}  isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue}/>}
            {objective?.moduleType === 'copy' && <CopyModule tab={tab} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}    */}
        </>
    );
};

export default Objectives;