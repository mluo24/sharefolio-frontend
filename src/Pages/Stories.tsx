import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import StoryList from "../Components/StoryList";
import { StoryType } from "../Types/ComponentProps";

const Stories = () => {
  const [stories, setStories] = useState<StoryType[]>([]);

  useEffect(() => {
    axios
      .get("/api/stories")
      .then((res) => {
        setStories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
