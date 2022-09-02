import { Stack, Box } from "@mui/material";
import { VideoCard } from "./AllExports";

const Videos = ({ videos, direction }) => {
  // if (!videos.length) return "Loading...";

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos?.length > 0 &&
        videos?.map((item, index) => (
          <Box key={index}>{item.id.videoId && <VideoCard video={item} />}</Box>
        ))}
    </Stack>
  );
};

export default Videos;
