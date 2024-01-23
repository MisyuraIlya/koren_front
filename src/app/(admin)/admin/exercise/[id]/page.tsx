import { AdminExerciseProvider } from '@/modules/admin/provider/AdminExerciseProvider';
import { AdminService } from '@/modules/admin/services/admin.service';
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
    try {
        const exercise = await AdminService.GetExercise(params.id)
        return (
            <AdminExerciseProvider exercise={exercise} courseId={params.id}>
                <Admin.Exercise.ExerciseTitle/>
                <Admin.Exercise.ExerciseOptions/>
                <Admin.Exercise.ExerciseModule/>
            </AdminExerciseProvider>
        );
    } catch(e) {
        const exercise = {
            title: 'as',
            description1: '',
            description2: '',
            courseId: 0,
            module: 4,
            youtubeLink: '',
            pdf: '',
            isInTheBook: false,  // Corrected typo here
            tabs: [],
        };
        return (
            <AdminExerciseProvider exercise={exercise} courseId={params.id}>
                <Admin.Exercise.ExerciseTitle/>
                <Admin.Exercise.ExerciseOptions/>
                <Admin.Exercise.ExerciseModule/>
            </AdminExerciseProvider>
        );
    }

};

export default ExercisePage;