import { Box, Button, Typography } from "@mui/material";
import banner from "../assets/images/banner.png";
function HeroBanner() {

  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography
        mb={{ lg: "30px", sm: "20px", xs: "15px" }}
        color="#ff2625"
        fontWeight="600"
        fontSize="26px"
      >
        Fitness Club
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb={{ lg: "30px", sm: "20px", xs: "15px" }}
      >
        Sweat, Smile <br /> and repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={6}>
        Check out the most effective exercises
      </Typography>
      <Button
        sx={{ backgroundColor: "#ff2625", padding: "12px", width: "200px" }}
        variant="contained"
        color="error"
        href="#exercises"
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight="600"
        color="#ff2625"
        sx={{ opacity: "0.1", display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img src={banner} alt="before" className="hero-banner-img" />
    </Box>
  );
}

export default HeroBanner;
