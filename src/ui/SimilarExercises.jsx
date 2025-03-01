// import toast from "react-hot-toast";
// import { useFetchExercise } from "../components/useFetchExercise";
// import Spinner from "./Spinner";
// import { Box, Stack, Typography } from "@mui/material";


// function SimilarExercises() {
//   const { exercisesData, isPending, error } = useFetchExercise();
//   if (isPending) return <Spinner />;
//   if (error) return toast.error("error loading exercises");
//   const target = [...new Set(exercisesData.map((exercise) => exercise.target))];
//   return (
//     <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
//       <Typography variant="h3">
//         Exercises that target the same muscle group
//       </Typography>
//       <Stack direction="row" sx={{ p: "2", position: "relative" }}>
//         {/* <HorizontalScrollbarSimilar data={exercisesData} /> */}
//       </Stack>
//     </Box>
//   );
// }

// export default SimilarExercises;
