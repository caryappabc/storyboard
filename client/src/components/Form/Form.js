import React, { useState, useEffect } from "react";
import { TextField, Typography, Button, Paper } from "@material-ui/core";
import FileBase64 from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createStory, updateStory } from "../../actions/stories";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";

function Form({ currentId, setCurrentId }) {
  const history = useHistory();

  const [storyData, setStoryData] = useState({
    title: "",
    message: "",
    tags: [],
    selectedFile: "",
  });
  const story = useSelector((state) =>
    currentId ? state.stories.stories.find((p) => p._id === currentId) : null
  );
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (story) return setStoryData(story);
  }, [story]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createStory({ ...storyData, name: user?.userData?.name }));
      clear();
    } else {
      dispatch(
        updateStory(currentId, { ...storyData, name: user?.userData?.name })
      );
      clear();
    }
  };

  if (!user?.userData?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h5" align="center" style={{ fontWeight: "bold" }}>
          Login to add a Story
        </Typography>
      </Paper>
    );
  }

  const clear = () => {
    setCurrentId(0);
    setStoryData({
      title: "",
      message: "",
      tags: [],
      selectedFile: "",
    });
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5" style={{ fontWeight: "bold" }}>
          {currentId ? `Edit` : `Create`} a Story
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          multiline
          value={storyData.title}
          onChange={(e) =>
            setStoryData({ ...storyData, title: e.target.value })
          }
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          value={storyData.message}
          onChange={(e) =>
            setStoryData({ ...storyData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          multiline
          value={storyData.tags}
          onChange={(e) => setStoryData({ ...storyData, tags: e.target.value })}
        />
        <div className={classes.fileInput}>
          <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setStoryData({ ...storyData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          size="large"
          type="submit"
          fullWidth
        >
          {currentId ? `Update` : `Add`}
        </Button>
        <Button
          className={classes.clearButton}
          variant="contained"
          size="small"
          fullWidth
          onClick={clear}
        >
          clear
        </Button>
      </form>
    </Paper>
  );
}

export default Form;
