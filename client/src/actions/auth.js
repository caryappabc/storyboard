import { AUTH, LOGOUT } from "../constants/actionType";
import * as api from "../api/index";

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT });
  } catch (error) {
    console.log(error.message);
  }
};

export const auth = (userData, token) => async (dispatch) => {
  try {
    dispatch({ type: AUTH, payload: { userData, token } });
  } catch (error) {
    console.log(error.message);
  }
};

export const signin = (formData, history) => async (dispatch) => {
  try {
    //login
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, payload: data });
    history.push("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    //signup
    const { data } = await api.signUp(formData);
    await dispatch({ type: AUTH, payload: data });
    history.push("/");
  } catch (error) {
    console.log(error.message);
  }
};
