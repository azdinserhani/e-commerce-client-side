import axios from "axios";

const BASE_URL = "http://localhost:3000";

const persisterData = localStorage.getItem("persist:root");
let Token = null;
if (persisterData) {
  try {
    const parseData = JSON.parse(persisterData);
    const user = parseData?.user ? JSON.parse(parseData.user) : null;
    Token = user?.currentUser?.accessToken || null;
  } catch (error) {
    console.error("error parsing persister Data: ", error);
  }
}

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Token: `Bearer ${Token}` },
});
