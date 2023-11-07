import { configureStore } from "@reduxjs/toolkit";
import baseDataReducer from "../features/baseData/BaseData";

const store = configureStore({
  reducer: {
    baseData: baseDataReducer,
  },
});

export default store;
