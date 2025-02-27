import { Box } from "@mui/material";
import HeroBanner from "./HeroBanner";
import SearchExercises from "./SearchExercises";
import Exercises from "./Exercises";
import { useState } from "react";

function Home() {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
console.log(bodyPart)
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercises={setExercises}
      />
      <Exercises
        bodyPart={bodyPart}
        exercises={exercises}
        setExercises={setExercises}
      />
    </Box>
  );
}

export default Home;
