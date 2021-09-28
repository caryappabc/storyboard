import React, { useEffect, useState } from "react";
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { getStories, getStoriesBySearch } from "../../actions/stories";
import Form from "../Form/Form";
import Stories from "../Stories/Stories";
import Pagination from "../Pagination/Pagination";

import useStyles from "./style";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();
  const query = useQuery();
  const history = useHistory();

  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   dispatch(getStories());
  // }, [currentId, dispatch]);

  const searchStory = () => {
    //function to initiate the search for
    if (search.trim()) {
      //dispatch -> fetch search parms
      dispatch(getStoriesBySearch({ search }));
      history.push(`/stories/search?searchQuery=${search || "none"}`);
    } else {
      history.push("/");
    }
  };
  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      // search text
      searchStory();
    }
  };

  return (
    <Grow in>
      <Container maxWidth="xl" className={classes.container}>
        <Grid
          container
          className={classes.gridContainer}
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <AppBar className={classes.appBarSearch} color="inherit">
              <TextField
                name="search"
                variant="filled"
                label="Search Tag"
                onKeyPress={handleKeyPress}
                fullWidth
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />

              <Button
                onClick={searchStory}
                disableRipple
                className={classes.buttonSearch}
              >
                Search
              </Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            {!searchQuery && (
              <Paper className={classes.pagination} elevation={3}>
                <Pagination page={page} />
              </Paper>
            )}
          </Grid>

          <Grid item xs={12} sm={6} md={9}>
            <Stories setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
