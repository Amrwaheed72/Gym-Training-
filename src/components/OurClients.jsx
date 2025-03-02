import { Box, Typography } from "@mui/material";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import Slider from "react-slick";
import before from "../assets/images/before.jpeg";
import before1 from "../assets/images/before 1.jpeg";
import after from "../assets/images/after.png";
import after1 from "../assets/images/after 1.jpg";

const clients = [
  { image: before, label: "Before" },
  { image: after, label: "After" },
  { image: before1, label: "Before" },
  { image: after1, label: "After" },
];

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
    <Box sx={{ position: "relative", textAlign: "center", mb: "100px" }}>
      <Typography color="#ff2625" fontWeight="bold" variant="h2" mb={4}>
        Our Clients!
      </Typography>
      <Slider {...settings}>
        {clients.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              px: { lg: "20px", sm: "10px", xs: "5px" },
            }}
          >
            <img className="our-clients" src={item.image} alt={item.label} />
            <Typography
              sx={{
                fontSize: { lg: "36px", sm: "28px", xs: "20px" },
                fontWeight: "bold",
                mt: 2,
              }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
export default OurClients;
