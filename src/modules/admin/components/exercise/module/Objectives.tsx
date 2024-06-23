import React,{FC} from 'react';
import TextModule from '../objectives/TextModule';
import SelectModule from '../objectives/SelectModule';
import OrdenModule from '../objectives/OrdenModule';
import WordModule from '../objectives/WordModule';
import IconModule from '../objectives/IconModule';
import StoryInstruction from '../objectives/StoryInstruction';
import InstructionWhite from '../objectives/InstructionWhite';
import InputModule from '../objectives/InputModule';
import InputCenteredModule from '../objectives/InputCenteredModule';
import Instruction from '../objectives/Instruction';
import OrdenBoldModule from '../objectives/OrdenBoldModule';
import SubInstruction from '../objectives/SubInstruction';
import TextModuled from '../objectives/TextModuled';
import TextModuleCentered from '../objectives/TextModuleCentered';
// import RootInputModule from '../objectives/RootInputModule';
import ExplanationSplited from '../objectives/ExplanationSplited';
import Explanation from '../objectives/Explanation';
import MixModule from '../objectives/MixModule';
import BankModule from '../objectives/BankModule';
import MixDrag from '../objectives/MixDrag';
import CheckBoxModule from '../objectives/CheckBoxModule';
import ImageFormRight from '../objectives/ImageFormRight';
import VideoForm from '../objectives/VideoForm';
import ChartForm from '../objectives/ChartForm';
import UnitedForm from '../objectives/UnitedForm';
import TableModule from '../objectives/TableModule';
import TableClearModule from '../objectives/TableClearModule';
import OpenQuestion from '../objectives/OpenQuestion';
import TextCopy from '../objectives/TextCopy';
import HeadLine2 from '../objectives/HeadLine2';
import ClearText from '../objectives/ClearText';
// import TypedInput from '../objectives/TypedInput';
import DraftBank from '../objectives/DraftBank';
import Draft from '../objectives/Draft';
import HeightSpace from '../objectives/HeightSpace';
import Properties from '../objectives/Properties';
import StoryHeadline from '../objectives/StoryHeadline';
import OriginModule from '../objectives/OriginModule';
import MainHead from '../objectives/MainHead';
import SecondHead from '../objectives/SecondHead';
import SecondHeadWhiteModule from '../objectives/SecondHeadWhite';
import IconDescription from '../objectives/IconDescription';
import SplitedScreenRight from '../objectives/SplitedScreenRight';
import DoneSplitedScreenRight from '../objectives/DoneSplitedScreenRight';
import SplitedScreenLeft from '../objectives/SplitedScreenLeft';
import DoneSplitedScreenLeft from '../objectives/DoneSplitedScreenLeft';
import SongModule from '../objectives/SongModule';
import TextAreaModule2 from '../objectives/TextAreaModule';
import CopyModule from '../objectives/CopyModule';

interface ObjectivesProps {
    objective: IObjective
    objectiveIndexes: IObjectiveIndexes

    storySticky: IObjective | null
    iconSticky: IObjective | null
}
const Objectives:FC<ObjectivesProps> = ({objective, objectiveIndexes,storySticky,iconSticky}) => {

    return (
        <>
        {objective?.moduleType === 'textArea' && <TextAreaModule2 objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'orden' && <OrdenModule objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'numberBold' && <OrdenModule objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'word' && <WordModule objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'selectbox' && <SelectModule objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'text' && <TextModule objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'icon1' && <IconModule objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'icon2' && <IconModule objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'storyInstruction' && <StoryInstruction objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'instructionWhite' && <InstructionWhite objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'wordBold' && <WordModule objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'wordRegular' && <WordModule objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'input' && <InputModule objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'inputCentered' && <InputCenteredModule objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'instruction' && <Instruction objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'ordenBold' && <OrdenBoldModule objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'subInstruction' && <SubInstruction objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'textModuled' && <TextModuled objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'textCentered' && <TextModuleCentered objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'bank' && <BankModule objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'checkBox' && <CheckBoxModule objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'openQuestionHamarot' && <OpenQuestion objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'openQuestion' && <OpenQuestion objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'headline2' && <HeadLine2 objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'draftBank' && <DraftBank objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'draft' && <Draft objective={objective} {...objectiveIndexes} />}
        {/* {objective?.moduleType === 'heightSpace' && <HeightSpace objective={objective} {...objectiveIndexes} />} */}
        {objective?.moduleType === 'storyHeadline' && <StoryHeadline objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'origin' && <OriginModule objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'mainHead' && <MainHead objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'secondHead' && <SecondHead objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'secondHeadWhite' && <SecondHeadWhiteModule objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'iconDescriptionTwo' && <IconDescription objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'iconDescriptionOne' && <IconDescription objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'song' && <SongModule objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'explanationSplited' && <ExplanationSplited objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'clearText' && <ClearText objective={objective} {...objectiveIndexes} />}


        {/* SPECIAL */}
        {objective?.moduleType === 'mixDrag' && <MixDrag objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'explanation' && <Explanation objective={objective} {...objectiveIndexes} />}
       
       
       
        {objective?.moduleType === 'copy' && <CopyModule objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'splitedScreenRight' && <SplitedScreenRight objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'doneSplitedScreenRight' && <DoneSplitedScreenRight objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'splitedScreenLeft' && <SplitedScreenLeft objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'doneSplitedScreenLeft' && <DoneSplitedScreenLeft objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'imageRight' && <ImageFormRight objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'properties' && <Properties objective={objective} {...objectiveIndexes} />}
        {/* {objective?.moduleType === 'pdf' && <PdfModule objective={objective} {...objectiveIndexes} />} */}
        {objective?.moduleType === 'table' && <TableModule objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'tableClear' && <TableClearModule objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'merged' && <UnitedForm objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'video' && <VideoForm objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'chart' && <ChartForm objective={objective} {...objectiveIndexes} />}
        {/* {objective?.moduleType === 'mergedExercise' && <MergedExercise objective={objective} {...objectiveIndexes} />} */}


        {/* DELTE? */}
        {/* {objective?.moduleType === 'mix' && <MixModule objective={objective} {...objectiveIndexes} />} */}
        {/* {objective?.moduleType === 'rootInput' && <RootInputModule objective={objective} {...objectiveIndexes} />} */}
        {objective?.moduleType === 'textCopy' && <TextCopy objective={objective} {...objectiveIndexes} />}
        {/* {objective?.moduleType === 'typedInput' && <TypedInput objective={objective} {...objectiveIndexes} />} */}





   
        </>
    );
};

export default Objectives;