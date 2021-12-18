import {
  Box,
  IconButton,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
  Link,
  Divider,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { StoryCardProps } from "../Types/ComponentProps";
import moment from "moment";

const StoryCard = ({ story }: StoryCardProps) => {
  return (
    <Card elevation={0} sx={{ minWidth: { xs: "100%", md: 750 } }}>
      <CardContent>
        <Box sx={{ display: "flex" }} justifyContent="space-between">
          <Typography variant="h5" component="h2">
            <Link href={`/stories/${story.id}/${story.slug}`}>
              {story.title}
            </Link>
            <Typography variant="subtitle2" component="span">
              {" "}
              by {story.author.username}
            </Typography>
          </Typography>
          <Typography variant="subtitle2">
            Updated {moment(story.updated_at).fromNow()}
          </Typography>
        </Box>
        <Typography variant="body2">{story.description}</Typography>
        <Divider sx={{ my: 1 }} />
        <Typography variant="body2">
          Status: {story.status} &middot; Category:{" "}
          <Link href={`/categories/${story.category}`}>{story.category}</Link>
        </Typography>
        Tags:{" "}
        {story.tags.length === 0
          ? "None"
          : story.tags.map((tag, i) => {
              return <Chip size="small" label={tag} key={i} />;
            })}
      </CardContent>
      <CardActions>
        <IconButton aria-label="like">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default StoryCard;
