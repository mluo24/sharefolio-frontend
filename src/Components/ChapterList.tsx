import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { ChapterListProps } from "../Types/ComponentProps";

const ChapterList = ({ chapters }: ChapterListProps) => {
  return (
    <List>
      {chapters.map((chapter, i) => {
        const innerText = `${i + 1}: ${chapter.title}`;
        return (
          <ListItem key={chapter.id} disablePadding>
            <ListItemButton
              component="a"
              href={`/stories/${chapter.parent_story.id}/${chapter.parent_story.slug}/c/${chapter.id}`}
            >
              <ListItemText primary={innerText} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ChapterList;
