import api from "@/app/config/axios.js";

export const registerService = (data) => {
  api.post("auth", data);
};
