import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Stack, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Videos } from "./AllExports";
import fetchFromAPI from "../utils/fetchFromAPI";

const VideoDetails = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetail(data?.items[0]);
    });

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        setVideos(data.items);
      }
    );
  }, [id]);

  return (
    <Box minHeight="95vh" backgroundColor="#0f0f0f">
      <Stack direction={{ xs: "column", md: "row" }}>
        {!videoDetail?.snippet ? (
          "Loading..."
        ) : (
          <Box flex={1}>
            <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className="react-player"
                controls
              />
              <Typography
                color="#fff"
                sx={{ padding: { xs: "0px 7px" } }}
                variant="h5"
                fontWeight="bold"
                p={"2"}
              >
                {videoDetail?.snippet?.title}
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ color: "#fff" }}
                py={1}
                px={2}
              >
                {/* <Link
                to={`
                /channel/${videoDetail?.snippet?.channelId}
              `}
              > */}
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                  sx={{ cursor: "pointer" }}
                >
                  {videoDetail?.snippet?.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
                {/* </Link> */}
                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(
                      videoDetail?.statistics?.viewCount
                    ).toLocaleString()}{" "}
                    views
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(
                      videoDetail?.statistics?.likeCount
                    ).toLocaleString()}{" "}
                    likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
        )}
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
