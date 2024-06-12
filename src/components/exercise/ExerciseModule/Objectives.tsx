import React,{FC} from 'react';
import TextModule from '../objectives/TextModule';
import SelectModule from '../objectives/SelectModule';
import OrdenModule from '../objectives/OrdenModule';
import WordModule from '../objectives/WordModule';
import IconModule from '../objectives/IconModule';
import StoryInstruction from '../objectives/StoryInstruction';
import InstructionWhite from '../objectives/InstructionWhite';
import Instruction from '../objectives/Instruction';
import SubInstruction from '../objectives/SubInstruction';
import TextModuleCentered from '../objectives/TextModuleCentered';
import ImageFormRight from '../objectives/ImageFormRight';
import VideoForm from '../objectives/VideoForm';
import OpenQuestion from '../objectives/OpenQuestion';
import ClearText from '../objectives/ClearText';
import HeightSpace from '../objectives/HeightSpace';
import OriginModule from '../objectives/OriginModule';
import MainHead from '../objectives/MainHead';
import SecondHead from '../objectives/SecondHead';
import TextAreaModule2 from '../objectives/TextAreaModule';
import ObjectiveInput from '../objectives2/ObjectiveInput';
import ObjectiveRootInput from '../objectives2/ObjectiveRootInput';
import CheckBoxModule from '../objectives/CheckBoxModule';
import Explanation from '@/modules/admin/components/exercise/objectives/Explanation';

interface ObjectivesProps {
    objective: IObjective
    objectiveIndexes: IObjectiveIndexes
}

const Objectives:FC<ObjectivesProps> = ({objective, objectiveIndexes}) => {
    return (
        <>
        {(objective?.moduleType === 'orden' || objective?.moduleType === 'ordenBold') && <OrdenModule objective={objective} {...objectiveIndexes} />}
        {(objective?.moduleType === 'word' || objective?.moduleType === 'wordBold' || objective?.moduleType === 'wordRegular') && <WordModule objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'clearText' && <ClearText objective={objective} {...objectiveIndexes} />}
        {(objective?.moduleType === 'text' || objective?.moduleType === 'textModuled') && <TextModule objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'selectbox' && <SelectModule objective={objective} {...objectiveIndexes} />}
        {(objective?.moduleType === 'inputCentered' || objective?.moduleType === 'input' || objective?.moduleType === 'typedInput') && <ObjectiveInput objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'subInstruction' && <SubInstruction objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'instruction' && <Instruction objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'rootInput' && <ObjectiveRootInput objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'imageRight' && <ImageFormRight objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'instructionWhite' && <InstructionWhite objective={objective} {...objectiveIndexes} />}
        {(objective?.moduleType === 'icon1' || objective?.moduleType === 'icon2') && <IconModule objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'secondHead' && <SecondHead objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'origin' && <OriginModule objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'checkBox' && <CheckBoxModule objective={objective} {...objectiveIndexes} />}
        {(objective?.moduleType === 'openQuestion' || objective?.moduleType === 'openQuestionHamarot')  && <OpenQuestion objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'video' && <VideoForm objective={objective} {...objectiveIndexes} />}
        {(objective?.moduleType === 'textCentered' || objective?.moduleType === 'textCopy') && <TextModuleCentered objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'textArea' && <TextAreaModule2 objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'storyInstruction' && <StoryInstruction objective={objective} {...objectiveIndexes} />}
        {(objective?.moduleType === 'explanationSplited' || objective?.moduleType === 'explanation') && <Explanation objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'heightSpace' && <HeightSpace objective={objective} {...objectiveIndexes} />}
        {objective?.moduleType === 'mainHead' && <MainHead objective={objective} {...objectiveIndexes} />}

        
        



        {/* {objective?.moduleType === 'draft' && <Draft objective={objective} {...objectiveIndexes} />} */} 
        {/* {objective?.moduleType === 'draftBank' && <DraftBank objective={objective} {...objectiveIndexes} />}  */}
        </>
    );
};

export default Objectives;