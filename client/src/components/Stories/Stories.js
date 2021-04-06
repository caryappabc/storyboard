import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import Story from "./Story/Story";
import useStyles from "./styles";

function Stories({ setCurrentId }) {
  const stories = useSelector((state) => state.stories);
  const classes = useStyles();

  return !stories.length ? (
    <CircularProgress />
  ) : (
    <Grid
      container
      className={classes.container}
      alignItems="stretch"
      spacing={3}
    >
      {stories.map((story) => (
        <Grid item key={story._id} xs={12} sm={6}>
          <Story story={story} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Stories;
