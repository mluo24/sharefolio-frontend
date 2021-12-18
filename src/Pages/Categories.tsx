import { Typography } from "@mui/material";
import CategoryList from "../Components/CategoryList";
import { getCategories } from "../data";

const Categories = () => {
  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        Categories
      </Typography>
      <CategoryList categories={getCategories()} />
    </>
  );
};

export default Categories;
