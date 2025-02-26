import { Box, Typography } from "@mui/material";
import BodyPartCard from "./BodyPartCard";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { useContext } from "react";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import RightArrowIcon from "../assets/icons/right-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

function HorizontalScrollbar({ data, bodyPart, setBodyPart }) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item, index) => (
        <Box
          key={item.id || index}
          itemID={item.id || index}
          title={item.id || index}
          m="0 40px"
        >
          <BodyPartCard
            item={item}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />
        </Box>
      ))}
    </ScrollMenu>
  );
}

export default HorizontalScrollbar;
