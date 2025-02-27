import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useFetchExercise } from "./useFetchExercise";
import Spinner from "../ui/Spinner";
import HorizontalScrollbar from "../ui/HorizontalScrollbar";

function SearchExercises({ bodyPart, setBodyPart, setExercises }) {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const { exercisesData, isPending, error, refetch } = useFetchExercise();
  useEffect(() => {
    const handleCategories = () => {
      if (exercisesData) {
        const categories = exercisesData?.map((exercise) => exercise.bodyPart);
        setBodyParts(["all", ...categories]);
      }
    };
    handleCategories();
  }, [exercisesData]);
  if (isPending) {
    return <Spinner />;
  }
  if (error) {
    return toast.error("error loading data");
  }
  const handleSearch = () => {
    if (search) {
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise?.name?.toLowerCase().includes(search) ||
          exercise?.target?.toLowerCase().includes(search) ||
          exercise?.equipment?.toLowerCase().includes(search) ||
          exercise?.bodyPart?.toLowerCase().includes(search)
      );
      setExercises(searchedExercises);
      setSearch("");
    }
  };

  function handleClickKey(e) {
    if (e.key === "Enter") {
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise?.name?.toLowerCase().includes(search) ||
          exercise?.target?.toLowerCase().includes(search) ||
          exercise?.equipment?.toLowerCase().includes(search) ||
          exercise?.bodyPart?.toLowerCase().includes(search)
      );
      setExercises(searchedExercises);
      setSearch("");
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" padding="20px">
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          onKeyDown={handleClickKey}
          className="input-field"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
          sx={{
            height: "72px",
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
              ":focus": { outline: "none" },
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
        />
        <Button
          onClick={handleSearch}
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
}

export default SearchExercises;
