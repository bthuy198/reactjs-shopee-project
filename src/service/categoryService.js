import axiosClient from "./axiosClient";
import { CATEGORY_URL } from "constants/global";

const categoryService = {
  getAll: async () => {
    return await axiosClient.get(CATEGORY_URL.CATEGORY_API_URL);
  },
};

export default categoryService;
