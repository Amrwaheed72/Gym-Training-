import { Box, Typography } from "@mui/material";
import BodyPartCard from "./BodyPartCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import RightArrowIcon from "../assets/icons/right-arrow.png";

const LeftArrow = ({ onClick }) => {
  return (
    <Typography
      onClick={onClick}
      className="right-arrow"
      sx={{ cursor: "pointer", position: "absolute", left: 0, zIndex: 1 }}
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
      sx={{ cursor: "pointer", position: "absolute", right: 0, zIndex: 1 }}
    >
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

function HorizontalScrollbar({ data, bodyPart, setBodyPart }) {
  // Filter unique categories, ensuring "all" is first
  const uniqueCategories = [
    "all",
    ...new Set(data.filter((item) => item !== "all")),
  ];

  // Slider settings
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Number of items visible at once
    slidesToScroll: 3, // Number of items to scroll per click
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ position: "relative" }}>
      <Slider {...settings}>
        {uniqueCategories.map((item, index) => (
          <Box
            key={item} // Use the category as the key since it's unique
            title={item}
            m="0 40px"
          >
            <BodyPartCard
              item={item} // Pass the category string directly
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </Box>
        ))}
      </Slider>
    </div>
  );
}

export default HorizontalScrollbar;
