import BodyPart from "../assets/icons/body-part.png";
import Target from "../assets/icons/target.png";
import Equipment from "../assets/icons/equipment.png";
import { Button, Stack, Typography } from "@mui/material";


function Detail({ exerciseDetail }) {
  // Handle cases where exerciseDetail is undefined, null, or empty
  if (!exerciseDetail || exerciseDetail.length === 0) {
    return <div>Loading exercise details...</div>; // Or return null, or show a loading/error message
  }

  // Safely destructure the first item, checking if it exists
  const exercise = exerciseDetail[0]; // Assign to a variable for clarity
  if (!exercise) {
    return <div>No exercise details available.</div>; // Handle case where exerciseDetail[0] is undefined
  }

  const {
    bodyPart,
    equipment,
    gifUrl,
    name,
    instructions,
    target,
    secondaryMuscles,
  } = exercise;

//   const { videoData, isPending, error } = useFetchVideo(name);


  console.log("exerciseDetail:", exerciseDetail);

  const extraDetails = [
    {
      icon: BodyPart,
      name: bodyPart,
    },
    {
      icon: Target,
      name: target,
    },
    {
      icon: Equipment,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">
          Exercises keep you strong, <b style={{ color: "#ff2625" }}>{name}</b>{" "}
          is one of the best exercises to target your{" "}
          <b style={{ color: "#ff2625" }}>{target}</b>. It will help you improve
          your mood and gain energy.
        </Typography>
        {extraDetails.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                bgcolor: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography textTransform="capitalize" variant="h5">
              {item.name}
            </Typography>
          </Stack>
        ))}
        <Typography>
          <b style={{ color: "#ff2625" }}>instructions</b> : <br />
          {instructions}
        </Typography>
        <Typography>
          <b style={{ color: "#ff2625" }}>secondary muscles</b> : <br />
          {Array.isArray(secondaryMuscles)
            ? secondaryMuscles.join(", ")
            : secondaryMuscles}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Detail;
