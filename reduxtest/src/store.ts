import { createSlice, configureStore } from "@reduxjs/toolkit";

// 여기서 뽑아 사용하니 여기에 다 모아둔다
const slice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
  },
});

export const { increase, decrease } = slice.actions;
export const store = configureStore({reducer:slice.reducer})
