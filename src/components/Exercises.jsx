import { Box, Pagination, Stack, Typography } from "@mui/material";
import ExerciseCard from "../ui/ExerciseCard";
import { useEffect, useState } from "react";
import { useFetchExercise } from "./useFetchExercise";
import Spinner from "../ui/Spinner";
import toast from "react-hot-toast";

function Exercises({ exercises, setExercises, bodyPart }) {
  const [currentPage, setCurrentPage] = useState(1);
  const { exercisesData, isPending, error } = useFetchExercise();

  useEffect(() => {
    const filterExercises = () => {
      if (!exercisesData) return;
      let filteredExercises;
      if (bodyPart === "all") {
        filteredExercises = exercisesData;
      } else {
        filteredExercises = exercisesData.filter(
          (exercise) => exercise.bodyPart === bodyPart
        );
      }

      setExercises(filteredExercises);
    };

    filterExercises();
  }, [bodyPart]);

  if (isPending) return <Spinner />;
  if (error) return toast.error("error loading the Exercises");

  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercises = exercises?.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="44px" sx={{}}>
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises?.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises?.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises?.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
}

export default Exercises;
