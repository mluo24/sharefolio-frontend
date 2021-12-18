import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import StoryList from "../Components/StoryList";
import { getStories } from "../data";
import { StoryType } from "../Types/ComponentProps";

const Stories = () => {
  const [stories, setStories] = useState<StoryType[]>([]);

  useEffect(() => {
    setStories(getStories());
  }, [stories]);

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        Stories
      </Typography>
      <p>Hello! This is where the stories will be.</p>
      <StoryList stories={stories} />
    </>
  );
};

export default Stories;
