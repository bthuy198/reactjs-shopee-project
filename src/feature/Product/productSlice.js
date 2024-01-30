import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HTTP_STATUS } from "constants/global";

import productService from "service/productService";

const namespace = "products";

const initialState = {
  data: [],
  product: {},
  status: HTTP_STATUS.IDLE,
  errorMessage: null,
  errorStatus: null,
};

export const fetchProductsData = createAsyncThunk(
  `${namespace}/fetchProductsData`,
  async (obj, { rejectWithValue }) => {
    console.log("obj", obj);
    return await productService
      .getProductByFilter(obj)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return rejectWithValue(error);
      });
  },
);

export const fetchProductById = createAsyncThunk(
  `${namespace}/fetchProductById`,
  async (obj, { rejectWithValue }) => {
    console.log("productId", obj);
    return await productService
      .getById(obj)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return rejectWithValue(error);
      });
  },
);

export const fetchAllProductsData = createAsyncThunk(
  `${namespace}/fetchAllProductsData`,
  async (obj, { rejectWithValue }) => {
    return await productService
      .getAll()
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return rejectWithValue(error);
      });
  },
);

const productSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProductsData.pending, (state) => {
        state.status = HTTP_STATUS.PENDING;
      })
      .addCase(fetchProductsData.fulfilled, (state, { payload }) => {
        state.status = HTTP_STATUS.FULFILLED;
        state.data = payload.content;
        console.log("products : ", state.data);
      })
      .addCase(fetchProductsData.rejected, (state, { payload }) => {
        state.status = HTTP_STATUS.REJECTED;
        if (payload.response) {
          state.errorMessage = payload.response.statusText;
          state.errorStatus = payload.response.status;
        }
      })
      .addCase(fetchAllProductsData.pending, (state) => {
        state.status = HTTP_STATUS.PENDING;
      })
      .addCase(fetchAllProductsData.fulfilled, (state, { payload }) => {
        state.status = HTTP_STATUS.FULFILLED;
        state.data = payload.content;
        console.log("products : ", state.data);
      })
      .addCase(fetchAllProductsData.rejected, (state, { payload }) => {
        state.status = HTTP_STATUS.REJECTED;
        if (payload.response) {
          state.errorMessage = payload.response.statusText;
          state.errorStatus = payload.response.status;
        }
      })
      .addCase(fetchProductById.pending, (state) => {
        state.status = HTTP_STATUS.PENDING;
      })
      .addCase(fetchProductById.fulfilled, (state, { payload }) => {
        state.status = HTTP_STATUS.FULFILLED;
        state.product = payload;
        console.log("state.product", state.product);
      })
      .addCase(fetchProductById.rejected, (state, { payload }) => {
        state.status = HTTP_STATUS.REJECTED;
        if (payload.response) {
          state.errorMessage = payload.response.statusText;
          state.errorStatus = payload.response.status;
        }
      });
  },
});

const { reducer, actions } = productSlice;

export const {} = actions;

export default reducer;
