import { createSlice } from "@reduxjs/toolkit";

const namespace = "baseData";

const initialState = {
  data: {
    webs: [],
  },
};

const baseData = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setWebs: (state, action) => {
      state.data.webs = action.payload;
    }
  },
});

const { reducer, actions } = baseData;
export const { setWebs } =
  actions;
export default reducer;
