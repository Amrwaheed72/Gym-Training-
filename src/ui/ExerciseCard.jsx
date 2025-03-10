import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function ExerciseCard({ exercise }) {
  const { id, gifUrl, name, bodyPart, target } = exercise;
  return (
    <Link className="exercise-card" to={`/exercise/${id}`}>
      <img src={gifUrl} alt={name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            backgroundColor: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            backgroundColor: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="20px"
      >
        {name}
      </Typography>
    </Link>
  );
}

export default ExerciseCard;
