import { useQuery } from "@tanstack/react-query";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const URL = 'https://exercisedb.p.rapidapi.com/exercises?limit=1327&offset=0';

export function useFetchExercise() {
    const { data: exercisesData, isPending, error, refetch } = useQuery({
        queryKey: ['allExercises'],
        queryFn: () => fetchData(URL, exerciseOptions),
        refetchOnWindowFocus: false
    });
    return { exercisesData, isPending, error, refetch };
}