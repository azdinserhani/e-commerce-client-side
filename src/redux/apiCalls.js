import { publicRequest, userRequest } from "../axios";
import { loginError, loginStart, loginSuccuss } from "./userSlice";
import { getOrderError, getOrderSuccuss, getOrderStart } from "./orderSlice";
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/api/auth/login", user);
    dispatch(loginSuccuss(res.data));
  } catch (error) {
    dispatch(loginError());
  }
};

export const getAllOrders = async (dispatch, id) => {
  dispatch(getOrderStart());
  try {
    const res = await userRequest.get("/api/order/find/" + id);
    console.log(res.data);

    dispatch(getOrderSuccuss(res.data.data));
  } catch (error) {
    console.log(error);
    
    dispatch(getOrderError());
  }
};
