import { Box } from "@mui/material";
import Detail from "../ui/Detail";
import ExerciseVideos from "../ui/ExerciseVideos";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchExercise } from "./useFetchExercise";
import Spinner from "../ui/Spinner";
import toast from "react-hot-toast";
import { fetchVideo, videoOptions } from "../utils/fetchVideo";

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
        setVideo([]); // Set video to empty if no exercise name
        return;
      }

      const videourl = "https://youtube-search-and-download.p.rapidapi.com";
      const query = `"${exerciseDetail[0].name}" exercise workout fitness tutorial`; // Use quotes for exact match
      const videoData = await fetchVideo(
        `${videourl}/search?query=${encodeURIComponent(query)}`,
        videoOptions
      );
      setVideo(videoData.contents || []); // Ensure video is an array, handle empty responses
    };
    fetchExerciseVideo();
  }, [id, exerciseDetail]);

  
  if (isPending) return <Spinner />;
  if (error) return toast.error("error loading the Exercises");
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos video={video} name={exerciseDetail[0]?.name} />
      {/* <SimilarExercises /> */}
    </Box>
  );
}

export default ExerciseDetail;
