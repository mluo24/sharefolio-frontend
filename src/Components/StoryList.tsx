import { Stack, Typography } from "@mui/material";
import { StoryListProps } from "../Types/ComponentProps";
import StoryCard from "./StoryCard";

const StoryList = ({ stories }: StoryListProps) => {
  return (
    <Stack spacing={1} alignItems="center">
      {stories.length === 0 ? (
        <Typography variant="body1">No stories found!</Typography>
      ) : (
        stories.map((story) => {
          return <StoryCard story={story} key={story.id} />;
        })
      )}
    </Stack>
  );
};

export default StoryList;
