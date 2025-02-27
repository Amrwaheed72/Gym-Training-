import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
function BodyPartCard({ item, bodyPart, setBodyPart }) {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        borderRadius: "20px",
        backgroundColor: "#fff",
        gap: { lg: "45px", sm: "35px", xs: "25px" },
        cursor: "pointer",
        boxShadow: "0 2px 2px  rgba(0,0,0,0.1)",
        width: { lg: "270px", sm: "220px", xs: "150px" },
        height: { lg: "280px", sm: "230px", xs: "160px" },
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        className="icon-image"
      />
      <Typography
        fontWeight="bold"
        color="#3a1212"
        textTransform="capitalize"
        sx={{ fontSize: { lg: "24px", sm: "18px", xs: "14px" } }}
      >
        {item}
      </Typography>
    </Stack>
  );
}

export default BodyPartCard;
