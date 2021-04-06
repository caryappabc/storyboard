import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user")).token
    }`;
  }
  return req;
});

export const fetchStories = () => API.get("/stories");
export const createStory = (newStory) => API.post("/stories", newStory);
export const updateStory = (id, updatedStory) =>
  API.patch(`/stories/${id}`, updatedStory);
export const deleteStory = (id) => API.delete(`/stories/${id}`);
export const likeStory = (id) => API.patch(`/stories/${id}/like`);

// sign in and sign up calls

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
