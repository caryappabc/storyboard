import axios from "axios";
//--------------------------
//development server
// const API = axios.create({ baseURL: "http://localhost:5000" });

//--------------------------
//production server
const API = axios.create({
  baseURL: "https://storyboardbackend.herokuapp.com/",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user")).token
    }`;
  }
  return req;
});

export const fetchStories = (page) => API.get(`/stories?page=${page}`);
export const fetchStory = (id) => API.get(`/stories/${id}`);
export const fetchStoriesBySearch = (searchQuery) =>
  API.get(`/stories/search?searchQuery=${searchQuery.search || "none"}`);
export const createStory = (newStory) => API.post("/stories", newStory);
export const updateStory = (id, updatedStory) =>
  API.patch(`/stories/${id}`, updatedStory);
export const deleteStory = (id) => API.delete(`/stories/${id}`);
export const likeStory = (id) => API.patch(`/stories/${id}/like`);

// sign in and sign up calls

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
