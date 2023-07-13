import api from "@/app/config/axios.js";

export const registerService = (data) => {
  return api.post("/users", data);
};
