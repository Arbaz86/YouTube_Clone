import { Stack, Box } from "@mui/material";
import { VideoCard } from "./AllExports";
import Shimmer from "./Shimmer";

const Videos = ({ videos, direction }) => {
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="flex-start"
      gap={3}
    >
      {videos?.length !== 0 ? (
        videos?.map((item, index) => {
          return (
            item?.id?.kind?.split("#")[1] === "video" && (
              <Box
                sx={{
                  width: { xs: "100%", sm: "358px", md: "320px" },
                }}
                key={index}
              >
                {item.id.videoId && <VideoCard video={item} />}
              </Box>
            )
          );
        })
      ) : (
        <Shimmer numOfShimmer={30} />
      )}
    </Stack>
  );
};

export default Videos;
