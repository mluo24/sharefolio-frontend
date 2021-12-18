import { Button, Stack } from "@mui/material";
import { CategoryListProps } from "../Types/ComponentProps";

const CategoryList = ({ categories }: CategoryListProps) => {
  return (
    <Stack direction="row" spacing={1}>
      {categories.map((category) => {
        return (
          <Button href={`${category.slug}`} key={category.id}>
            {category.name}
          </Button>
        );
      })}
    </Stack>
  );
};

export default CategoryList;
