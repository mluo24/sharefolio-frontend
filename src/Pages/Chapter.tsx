import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const Chapter = () => {
  let params = useParams();

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        Chapter Page {params.chapterid} for {params.storyid} {params.storyslug}
      </Typography>
      <p>Time to read!</p>
    </>
  );
};

export default Chapter;
