import { Box } from "@mui/material";
import HeroBanner from "./HeroBanner";
import SearchExercises from "./SearchExercises";
import Exercises from "./Exercises";
import { useState } from "react";
import OurClients from "./OurClients";

function Home() {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <OurClients />
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
