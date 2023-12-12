import http from "../../utils/http";
import { user } from "../../constants/endpoints";

const getUsers = () => {
  const GET_USER_ENDPOINT = user.getUsers();
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.get(`${API_BASE_URL}${GET_USER_ENDPOINT}`);
};

export default getUsers;
