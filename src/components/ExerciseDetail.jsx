import { Box } from "@mui/material";
import Detail from "../ui/Detail";
import ExerciseVideos from "../ui/ExerciseVideos";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchExercise } from "./useFetchExercise";
import toast from "react-hot-toast";
import { fetchVideo, videoOptions } from "../utils/fetchVideo";
import { Spinner } from "../ui/Spinner";

function ExerciseDetail() {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [video, setVideo] = useState([]);

  const { id } = useParams();
  const { exercisesData, isPending, error } = useFetchExercise();
  useEffect(() => {
    const fetchExerciseDetail = () => {
      if (!exerciseDetail) return;
      const currentSelectedExercise = exercisesData?.filter(
        (exercise) => exercise.id === id
      );
      setExerciseDetail(currentSelectedExercise);
    };
    fetchExerciseDetail();
  }, [id]);

  useEffect(() => {
    const fetchExerciseVideo = async () => {
      if (!exerciseDetail || !exerciseDetail[0]?.name) {
        setVideo([]); 
        return;
      }

      const videourl = "https://youtube-search-and-download.p.rapidapi.com";
      const query = `"${exerciseDetail[0].name}" exercise workout fitness tutorial`;
      const videoData = await fetchVideo(
        `${videourl}/search?query=${encodeURIComponent(query)}`,
        videoOptions
      );
      setVideo(videoData.contents || []); 
    };
    fetchExerciseVideo();
  }, [id, exerciseDetail]);

  
  if (isPending) return <Spinner variant="ring" />;
  if (error) return toast.error("error loading the Exercises");
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos video={video} name={exerciseDetail[0]?.name} />
    </Box>
  );
}

export default ExerciseDetail;
