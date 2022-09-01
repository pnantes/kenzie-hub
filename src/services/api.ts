import axios from "axios";
import { responseInterceptor, errorInterceptor } from "./interceptors";

const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/",
  timeout: 5000,
});

api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);

export default api;
