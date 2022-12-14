import axios from "axios";

export const registerApi = async (payload) => {
  await axios.post(`${process.env.REACT_APP_API}/auth/register`, payload);
};

export const loginApi = async (payload) => {
  return axios.post(`${process.env.REACT_APP_API}/auth/login`, payload);
};
