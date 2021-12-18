import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import CategoryList from "../Components/CategoryList";
import { CategoryType } from "../Types/ComponentProps";

const Categories = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    axios
      .get("/api/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        Categories
      </Typography>
      <CategoryList categories={categories} />
    </>
  );
};

export default Categories;
