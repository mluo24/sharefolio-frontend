import { Typography, Box, CircularProgress, Divider } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ChapterType } from "../Types/ComponentProps";
import PageNotFound from "./PageNotFound";

const Chapter = () => {
  let params = useParams();

  const [chapter, setChapter] = useState<ChapterType>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(`/api/chapters/${params.chapterid}`)
      .then((res) => {
        setChapter(res.data);
        console.log(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params]);

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : chapter &&
        chapter.parent_story.id === parseInt(params.storyid!) &&
        chapter.parent_story.slug === params.storyslug! ? (
        <>
          <Typography variant="h3" component="h1" gutterBottom>
            {chapter.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            <strong>Description</strong>: {chapter.description}
          </Typography>
          <Divider sx={{ my: 5 }} />
          <Box dangerouslySetInnerHTML={{ __html: chapter.body }} />
        </>
      ) : (
        <PageNotFound />
      )}
    </>
  );
};

export default Chapter;
