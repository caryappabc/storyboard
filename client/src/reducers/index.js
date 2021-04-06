import { combineReducers } from "redux";
import stories from "./stories";
import auth from "./auth";

export default combineReducers({ stories, auth });
