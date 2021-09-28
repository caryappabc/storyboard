import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import Story from "./Story/Story";
import useStyles from "./styles";

function Stories({ setCurrentId }) {
  const { stories, isLoading } = useSelector((state) => state.stories);
  const classes = useStyles();

  if (!stories && !isLoading) return "No Stories";

  return isLoading ? (
    <div className={classes.loading}>
      <CircularProgress
        variant="indeterminate"
        thickness={0.2}
        size={300}
        color="secondary"
        disableShrink
      />
    </div>
  ) : (
    <Grid
      container
      className={classes.container}
      alignItems="stretch"
      spacing={3}
    >
      {stories.map((story) => (
        <Grid item key={story._id} xs={12} sm={12} md={6} lg={4}>
          <Story story={story} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Stories;
