/* eslint-disable import/no-anonymous-default-export */
import {
  CREATE,
  UPDATE,
  DELETE,
  FETCH_ALL,
  LIKE,
} from "../constants/actionType";
export default (stories = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...stories, action.payload];
    case UPDATE:
      return stories.map((story) =>
        story._id === action.payload._id ? action.payload : story
      );
    case LIKE:
      return stories.map((story) =>
        story._id === action.payload._id ? action.payload : story
      );
    case DELETE:
      return stories.filter((story) => story._id !== action.payload._id);
    default:
      return stories;
  }
};
