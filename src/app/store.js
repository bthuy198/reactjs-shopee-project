import { configureStore } from "@reduxjs/toolkit";
import productReducer from "feature/Product/productSlice";
import categoryReducer from "feature/Primary/Body/categorySlice";
import baseSlice from "feature/baseSlice";

const rootReducer = {
  productData: productReducer,
  categoryData: categoryReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
