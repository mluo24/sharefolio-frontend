import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const Category = () => {
  let params = useParams();

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        {params.categoryslug} Category
      </Typography>
      <p>See this category's stories.</p>
    </>
  );
};

export default Category;
