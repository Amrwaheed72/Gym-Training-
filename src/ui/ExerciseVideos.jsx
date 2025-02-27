import { Box, Stack, Typography } from "@mui/material";

function ExerciseVideos({ video, name }) {
  if (!video || video.length === 0) return "Loading...";

  console.log("Video Data:", video); // Debugging

  // Filter videos to ensure relevance to exercises
  const exerciseVideos = video
    .filter((vid) => vid.video) // Remove channels
    .filter((vid) => {
      const title = vid.video.title.toLowerCase();
      const isRelevant =
        title.includes("exercise") ||
        title.includes("workout") ||
        title.includes("fitness") ||
        title.includes(name.toLowerCase()); // Match the exercise name
      return isRelevant;
    })
    .slice(0, 6); // Limit to 3 relevant videos

  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Watch{" "}
        <b style={{ color: "#ff2625", textTransform: "capitalize" }}>{name}</b>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "80px", xs: "0" } }}
      >
        {exerciseVideos.length > 0 ? (
          exerciseVideos.map((vid, index) => (
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${vid.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              {vid.video.thumbnails?.[0]?.url && (
                <>
                  <img src={vid.video.thumbnails[0].url} alt="video" />
                  <Box>
                    <Typography color="black" variant="h6">{vid.video.title}</Typography>
                    <Typography color="#ff2625" variant="h6">{vid.video.channelName}</Typography>
                  </Box>
                </>
              )}
            </a>
          ))
        ) : (
          <Typography>No relevant exercise videos found.</Typography>
        )}
      </Stack>
    </Box>
  );
}

export default ExerciseVideos;
