export const ExerciseTypeSerivce = {
    async getExerciseTypes(): Promise<IExerciseType[]>{
        const response = await fetch(`/exercise-type`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json()
    }
}