import axios from "axios";
import type { User } from "./AccountContext";

// axios does not send cookies by default; the session cookie must go along
// with every account request so Express can find req.session.currentUser.
const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const USERS_API = `${HTTP_SERVER}/api/users`;

export const signin = async (credentials: {
  username: string;
  password: string;
}): Promise<User> => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/signin`,
    credentials,
  );
  return response.data;
};
export const signup = async (user: Partial<User>): Promise<User> => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
  return response.data;
};
export const updateUser = async (user: User): Promise<User> => {
  const response = await axiosWithCredentials.put(
    `${USERS_API}/${user._id}`,
    user,
  );
  return response.data;
};
export const profile = async (): Promise<User> => {
  const response = await axiosWithCredentials.get(`${USERS_API}/profile`);
  return response.data;
};
export const signout = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
  return response.data;
};
