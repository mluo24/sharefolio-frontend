import { Stack } from "@mui/material";
import React from "react";
import { StoryListProps } from "../Types/ComponentProps";
import StoryCard from "./StoryCard";

const StoryList = ({ stories }: StoryListProps) => {
  return (
    <Stack spacing={1} alignItems="center">
      {stories.map((story) => {
        return <StoryCard story={story} key={story.id} />;
      })}
    </Stack>
  );
};

export default StoryList;
