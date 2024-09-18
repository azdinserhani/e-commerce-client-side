import { publicRequest } from "../axios";
import { loginError, loginStart, loginSuccuss } from "./userSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/api/auth/login", user);
    dispatch(loginSuccuss(res.data));
  } catch (error) {
    dispatch(loginError());
  }
};
