import * as api from "../api/index";
import {
  CREATE,
  UPDATE,
  DELETE,
  FETCH_ALL,
  FETCH_BY_SEARCH,
  LIKE,
  START_LOADING,
  DONE_LOADING,
  FETCH_STORY,
} from "../constants/actionType";
// Action Creators

export const getStory = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchStory(id);
    dispatch({ type: FETCH_STORY, payload: data });
    dispatch({ type: DONE_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};
export const getStories = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchStories(page);
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: DONE_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getStoriesBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.fetchStoriesBySearch(searchQuery);
    dispatch({ type: FETCH_BY_SEARCH, payload: data });
    dispatch({ type: DONE_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const createStory = (story, history) => async (dispatch) => {
  try {
    const { data } = await api.createStory(story);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateStory = (id, story) => async (dispatch) => {
  try {
    const { data } = await api.updateStory(id, story);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteStory = (id) => async (dispatch) => {
  try {
    await api.deleteStory(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const likeStory = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeStory(id);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
