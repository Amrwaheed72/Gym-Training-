import { Box, Typography } from "@mui/material";
import BodyPartCard from "./BodyPartCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import ExerciseCard from "./ExerciseCard";

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

function HorizontalScrollbarSimilar({
  data,
  bodyPart,
  setBodyPart,
  isBodyParts,
}){
  // Slider settings
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div style={{ position: "relative", height: "400px" }}>
      <Slider {...settings}>
        {data.map((item, index) => (
          <Box
            key={item}
            title={item}
            sx={{ m: { lg: "0 40px", sm: "0 30px", xs: "0 20px" } }}
          >
            {isBodyParts ? (
              <BodyPartCard
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        ))}
      </Slider>
    </div>
  );
}

export default HorizontalScrollbarSimilar;
