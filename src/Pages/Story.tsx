import { Typography, CircularProgress, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChapterType, StoryType } from "../Types/ComponentProps";
import PageNotFound from "./PageNotFound";
import axios from "axios";
import ChapterList from "../Components/ChapterList";

const Story = () => {
  const { storyid, storyslug } =
    useParams<{ storyid: string; storyslug: string }>();

  const [story, setStory] = useState<StoryType>();
  const [publicChapters, setPublicChapters] = useState<ChapterType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`/api/stories/${storyid}`)
        .then((res) => {
          console.log(res.data);
          setStory(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
      axios
        .get(`/api/stories/${storyid}/published_chapters`)
        .then((res) => {
          console.log(res.data);
          setPublicChapters(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [storyid]);

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : story && story.slug === storyslug ? (
        <>
          <Box mb={6}>
            <Typography variant="h3" component="h1" gutterBottom>
              {story.title}
            </Typography>
            <Typography variant="body1">{story.description}</Typography>
          </Box>
          <Typography variant="h5" component="h2">
            Chapter List
          </Typography>
          <ChapterList chapters={publicChapters} />
        </>
      ) : (
        <PageNotFound />
      )}
    </>
  );
};

export default Story;
