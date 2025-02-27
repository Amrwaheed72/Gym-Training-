import { useQuery } from "@tanstack/react-query";
import { fetchVideo, videoOptions } from "../utils/fetchVideo";


export function useFetchVideo({name}) {
    const URL = `https://youtube-search-and-download.p.rapidapi.com/search?q=${name}`;
    const { data: videoData, isPending, error, refetch } = useQuery({
        queryKey: ['video'],
        queryFn: () => fetchVideo(URL, videoOptions),
        refetchOnWindowFocus: false
    });
    return { videoData, isPending, error, refetch };
}