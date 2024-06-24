import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import React, {FC, useEffect} from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Explanation:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

    const {setValue} = useAdminExercise()
    useEffect(() => {
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].isFullText`, objective.isFullText)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].moduleType`, objective.moduleType)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].orden`, objective.orden)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].placeholder`, objective.placeholder)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].values`, objective.values)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].answers`, objective.answers)
    }, [tabIndex,taskIndex,rowIndex,objectiveIndex,objective]);

    
    return (
        <>
        {objective.moduleType === 'explanation' ?
            <div style={{width:'1px', height:'200px', position:'relative'}}>
                <Box position={'absolute'} sx={{top:'25%'}}>
                    <Accordion sx={{width:'92vw'}}>
                        <AccordionSummary
                        sx={{width:'100%'}}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                        הסבר
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                dangerouslySetInnerHTML={{ __html: objective.values[0]?.value }}
                                sx={{
                                    textAlign:'justify',
                                }}
                            />
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </div>
        :
            <th style={{width:'100%'}}>
                <Accordion sx={{width:'100%'}}>
                    <AccordionSummary
                    sx={{width:'100%'}}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                    הסבר
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            dangerouslySetInnerHTML={{ __html: objective.values[0]?.value }}
                            sx={{
                                textAlign:'justify',
                            }}
                        />
                    </AccordionDetails>
                </Accordion>
            </th>
        }
        </>
       
    );
};

export default Explanation;