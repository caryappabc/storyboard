/* eslint-disable import/no-anonymous-default-export */
import {
  CREATE,
  UPDATE,
  DELETE,
  FETCH_ALL,
  FETCH_BY_SEARCH,
  LIKE,
  FETCH_STORY,
} from "../constants/actionType";
export default (state = { isLoading: true, stories: [] }, action) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true };
    case "DONE_LOADING":
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        stories: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
      return { ...state, stories: action.payload };
    case FETCH_STORY:
      return { ...state, story: action.payload };
    case CREATE:
      return { ...state, stories: [...state.stories, action.payload] };
    case UPDATE:
      return {
        ...state,
        stories: state.stories.map((story) =>
          story._id === action.payload._id ? action.payload : story
        ),
      };
    case LIKE:
      return {
        ...state,
        stories: state.stories.map((story) =>
          story._id === action.payload._id ? action.payload : story
        ),
      };
    case DELETE:
      return {
        ...state,
        stories: state.stories.filter(
          (story) => story._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};
