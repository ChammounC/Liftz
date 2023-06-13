import React from 'react'
import { Box,Stack,Typography } from '@mui/material';


const ExerciseVideos = ({exerciseVideos,name}) => {
    if(!exerciseVideos.length) return 'Loading...'
  return (
    <Box sx={{ mt: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography
        variant="h3"
        mb="33px"
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
      >
        Watch{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flexStart"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0px" } }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color="#000" textTransform="capitalize">
                {item.video.title.toLowerCase()}
              </Typography>
              <Typography variant="h6" color="#000">
                {item.video.channelName.toLowerCase()}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
}

export default ExerciseVideos