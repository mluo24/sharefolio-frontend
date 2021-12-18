import { Typography, Box, CircularProgress } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StoryList from "../Components/StoryList";
import { CategoryType } from "../Types/ComponentProps";
import PageNotFound from "./PageNotFound";

const Category = () => {
  let params = useParams();

  const [category, setCategory] = useState<CategoryType>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(`/api/categories/${params.categoryslug}`)
      .then((res) => {
        setCategory(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params]);

  return (
    <Box>
      {isLoading ? (
        <CircularProgress />
      ) : category ? (
        <>
          <Typography variant="h3" component="h1" gutterBottom>
            {category.name}
          </Typography>
          <Typography variant="subtitle1">{category.description}</Typography>
          <StoryList stories={category.story_set} />
        </>
      ) : (
        <PageNotFound />
      )}
    </Box>
  );
};

export default Category;
