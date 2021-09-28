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
  IconButton,
  Typography,
  ButtonBase,
} from "@material-ui/core";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import moment from "moment";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { deleteStory, likeStory } from "../../../actions/stories";
import { useHistory } from "react-router-dom";

function Story({ story, setCurrentId }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));

  const Likes = () => {
    if (story?.likes?.length > 0) {
      return story?.likes.find(
        (like) => like === (user?.userData?.googleId || user?.userData?._id)
      ) ? (
        <Button startIcon={<ThumbUpOutlinedIcon />}>
          {story?.likes?.length > 2
            ? `You and ${story?.likes.length - 1} others`
            : `${story?.likes?.length} like${
                story?.likes?.length > 1 ? "s" : ""
              }`}
        </Button>
      ) : (
        <Button startIcon={<ThumbUpOutlinedIcon />}>
          {story?.likes?.length} {story?.likes?.length === 1 ? "Like" : "Likes"}
        </Button>
      );
    }

    return <Button startIcon={<ThumbUpOutlinedIcon />} />;
  };

  const openStory = () => {
    history.push(`/stories/${story._id}`);
  };

  return (
    <Card className={classes.root} raised elevation={4}>
      <ButtonBase className={classes.cardAction} onClick={openStory}>
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
            <IconButton
              className={classes.edit}
              variant="outlined"
              onClick={() => setCurrentId(story._id)}
            >
              <EditOutlinedIcon />
            </IconButton>
          </div>
        )}

        <CardMedia
          className={classes.media}
          image={story.selectedFile}
          title={story.title}
          alt={story.title}
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
      </ButtonBase>
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
        {(user?.userData.googleId === story.creator ||
          user?.userData._id === story.creator) && (
          <IconButton
            className={classes.delete}
            variant="outlined"
            onClick={() => dispatch(deleteStory(story._id))}
          >
            <DeleteOutlinedIcon />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}

export default Story;
