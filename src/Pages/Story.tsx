import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStory } from "../data";
import { StoryType } from "../Types/ComponentProps";
import PageNotFound from "./PageNotFound";

const Story = () => {
  const { storyid, storyslug } =
    useParams<{ storyid: string; storyslug: string }>();

  const [story, setStory] = useState<StoryType>();

  useEffect(() => {
    if (storyid !== undefined && storyslug !== undefined)
      setStory(getStory(parseInt(storyid), storyslug));
  }, [storyid, storyslug, story]);

  return (
    <>
      {story ? (
        <>
          <Typography variant="h3" component="h1" gutterBottom>
            {story.title}
          </Typography>
          {story.description}
        </>
      ) : (
        <PageNotFound />
      )}
    </>
  );
};

export default Story;
