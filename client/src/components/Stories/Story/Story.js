import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  Button,
  Typography,
} from "@material-ui/core";
import moment from "moment";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { deleteStory, likeStory } from "../../../actions/stories";

function Story({ story, setCurrentId }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  const Likes = () => {
    if (story?.likes?.length > 0) {
      return story?.likes.find(
        (like) => like === (user?.userData?.googleId || user?.userData?._id)
      ) ? (
        <>
          {story?.likes?.length > 2
            ? `You and ${story?.likes.length - 1} others`
            : `${story?.likes?.length} like${
                story?.likes?.length > 1 ? "s" : ""
              }`}
        </>
      ) : (
        <>
          {story?.likes?.length} {story?.likes?.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return <>Like</>;
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {story.name && story.name.charAt(0)}
          </Avatar>
        }
        title={story.name}
        subheader={moment(story.createdAt).fromNow()}
      />
      {(user?.userData.googleId === story.creator ||
        user?.userData._id === story.creator) && (
        <div className={classes.overlay}>
          <Button
            className={classes.edit}
            size="small"
            variant="outlined"
            onClick={() => setCurrentId(story._id)}
          >
            edit
          </Button>
        </div>
      )}
      <CardMedia
        className={classes.media}
        image={story.selectedFile}
        title={story.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {`#${story.tags}`}{" "}
        </Typography>
      </CardContent>
      <Collapse in timeout="auto" unmountOnExit>
        <CardContent>
          <Typography varient="h5">{story.title}</Typography>
          <Typography paragraph color="textSecondary">
            Message: {story.message}
          </Typography>
        </CardContent>
      </Collapse>
      <CardActions className={classes.cardActions} disableSpacing>
        <Button
          className={classes.like}
          size="small"
          variant="outlined"
          disabled={!user?.userData}
          onClick={() => dispatch(likeStory(story._id))}
        >
          <Likes />
        </Button>
        {console.log(story.creator)}
        {(user?.userData.googleId === story.creator ||
          user?.userData._id === story.creator) && (
          <Button
            className={classes.delete}
            size="small"
            variant="outlined"
            onClick={() => dispatch(deleteStory(story._id))}
          >
            Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default Story;
