import { Box, Typography } from "@mui/material";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import Slider from "react-slick";
import before from "../assets/images/before.jpeg";
import after from "../assets/images/after.png";

const clients = [before, after, before, after];

const LeftArrow = ({ onClick }) => {
  return (
    <Typography
      onClick={onClick}
      className="right-arrow"
      sx={{
        cursor: "pointer",
        position: "absolute",
        zIndex: 1,
        right: { lg: "70px", sm: "50px", xs: "30px" },
        bottom: { lg: "-50px", sm: "-50px" },
      }}
    >
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = ({ onClick }) => {
  return (
    <Typography
      onClick={onClick}
      className="left-arrow"
      sx={{
        cursor: "pointer",
        position: "absolute",
        right: 0,
        zIndex: 1,
        bottom: "-50px",
      }}
    >
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

function OurClients() {
  // Slider settings
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div
      style={{ position: "relative", height: "400px", marginBottom: "300px " }}
    >
      <Typography
        color="#ff2625"
        textAlign="center"
        fontWeight="bold"
        variant="h2"
        marginBottom="50px"
      >
        Our Clients!
      </Typography>
      <Slider {...settings}>
        {clients.map((pic, index) => (
          <Box
            sx={{ m: { lg: "0 40px", sm: "0 30px", xs: "0 20px" } }}
            key={index}
          >
            <img
              src={pic}
              alt="client"
              style={{
                width: "500px",
                height: "360px",
                borderRadius: "40px",
                margin: "0 auto",
              }}
            />
          </Box>
        ))}
      </Slider>
      <Typography
        fontSize="50px"
        position="absolute"
        bottom="-150px"
        left="300px"
      >
        before
      </Typography>
      <Typography
        fontSize="50px"
        position="absolute"
        bottom="-150px"
        left="970px"
        color="black"
      >
        after
      </Typography>
    </div>
  );
}
export default OurClients;
