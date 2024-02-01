import { AdminExerciseProvider } from '@/modules/admin/provider/AdminExerciseProvider';
import React, {FC} from 'react';
import Admin from '@/modules/admin';

interface ExercisePageProps {
    params: {
        id: string
    }
    searchParams: {
 
    }
}

const ExercisePage:FC<ExercisePageProps> = async ({params}) => {
    return (
        <AdminExerciseProvider courseId={params.id}>
            <Admin.Exercise.ExerciseTitle/>
            <Admin.Exercise.ExerciseOptions/>
            <Admin.Exercise.ExerciseModule/>
        </AdminExerciseProvider>
    );

};

export default ExercisePage;