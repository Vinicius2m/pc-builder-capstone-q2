import axios from "axios";

const api = axios.create({
  baseURL: "https://pc-builder-json-server.onrender.com",
});

export default api;
