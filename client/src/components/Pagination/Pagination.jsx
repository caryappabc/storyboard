import React, { useEffect } from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getStories } from "../../actions/stories";

import useStyles from "./style";

const Paginate = ({ page }) => {
  const { numberOfPages } = useSelector((state) => state.stories);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (page) {
      dispatch(getStories(page));
    }
  }, [page]);

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={numberOfPages}
      page={Number(page) || "1"}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/stories?page=${item.page}`}
        />
      )}
    />
  );
};

export default Paginate;
