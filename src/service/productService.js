import axiosClient from "./axiosClient";
import { PRODUCT_URL } from "constants/global";

const productService = {
  getAll: async () => {
    return await axiosClient.get(PRODUCT_URL.PRODUCT_API_URL);
  },
  getProductByFilter: async (productFilterReqDTO) => {
    return await axiosClient.post(
      PRODUCT_URL.ALL_PRODUCT_URL,
      productFilterReqDTO,
    );
  },
  getById: async (productId) => {
    return await axiosClient.get(`${PRODUCT_URL.PRODUCT_API_URL}/${productId}`);
  },
};

export default productService;
