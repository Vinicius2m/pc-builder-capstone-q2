import axios from "axios";

const api = axios.create({
  baseURL: "https://pc-builder-json-server-production.up.railway.app",
});

export default api;
