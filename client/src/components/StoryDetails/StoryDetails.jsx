import React, { useEffect } from "react";
import {
  Typography,
  Divider,
  Paper,
  CircularProgress,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useHistory } from "react-router-dom";

import { getStory, getStoriesBySearch } from "../../actions/stories";

import useStyles from "./styles";

const StoryDetails = () => {
  const classes = useStyles();
  const { story, stories, isLoading } = useSelector((state) => state.stories);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getStory(id));
  }, [id]);

  useEffect(() => {
    dispatch(getStoriesBySearch({ search: story?.tags.join(".") }));
  }, [story]);

  if (!story) return null;

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress
          variant="indeterminate"
          thickness={0.2}
          size={"3rem"}
          color="secondary"
        />
      </Paper>
    );
  }
  const recomendedStories = stories.filter(({ _id }) => _id !== story._id);

  const openPost = (_id) => history.push(`/stories/${_id}`);

  return (
    <Paper className={classes.cardContainer} elevation={6}>
      <div className={classes.card}>
        <div className={classes.imageSection} elavation={6}>
          <img
            className={classes.media}
            src={
              story.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            alt={story.title}
          />
        </div>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">
            {story.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            component="h2"
          >
            {story.tags.map((tag) => `#${tag} `)}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {story.message}
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          <Typography variant="h6">Created by: {story.name}</Typography>
          <Typography variant="body1">
            {moment(story.createdAt).fromNow()}
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
        </div>
      </div>
      {recomendedStories.length && (
        <div className={classes.section}>
          <Typography variant="h5" gutterBottom>
            You might also like
          </Typography>
          <Divider />
          <div className={classes.recomendedStory}>
            {recomendedStories.map(
              ({ title, message, name, likes, selectedFile, _id }) => (
                <div
                  key={_id}
                  style={{ margin: "20px", cursor: "pointer" }}
                  onClick={() => openPost(_id)}
                >
                  <Typography variant="h6" gutterBottom>
                    {title}
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    {name}
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    {message}
                  </Typography>
                  <img
                    src={selectedFile}
                    alt={title}
                    className={classes.tumbnail}
                  />
                  <Typography variant="subtitle1" gutterBottom>
                    Likes : {likes.length}
                  </Typography>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </Paper>
  );
};

export default StoryDetails;
