import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HTTP_STATUS } from "constants/global";

import categoryService from "service/categoryService";

const namespace = "categories";

const initialState = {
  data: [],
  status: HTTP_STATUS.IDLE,
  errorMessage: null,
  errorStatus: null,
};

export const fetchCategoriesData = createAsyncThunk(
  `${namespace}/fetchCategoriesData`,
  async (obj, { rejectWithValue }) => {
    return await categoryService
      .getAll()
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return rejectWithValue(error);
      });
  },
);

const categorySlice = createSlice({
  name: namespace,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCategoriesData.pending, (state) => {
        state.status = HTTP_STATUS.PENDING;
      })
      .addCase(fetchCategoriesData.fulfilled, (state, { payload }) => {
        state.status = HTTP_STATUS.FULFILLED;
        state.data = payload;
      })
      .addCase(fetchCategoriesData.rejected, (state, { payload }) => {
        state.status = HTTP_STATUS.REJECTED;
        if (payload.response) {
          state.errorMessage = payload.response.statusText;
          state.errorStatus = payload.response.status;
        }
      });
  },
});

const { reducer, actions } = categorySlice;

export const {} = actions;

export default reducer;
