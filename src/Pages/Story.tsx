import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const Story = () => {
  let params = useParams();

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        This is story {params.storyid} {params.storyslug}
      </Typography>
      <p>Insert beautiful content here!</p>
    </>
  );
};

export default Story;
