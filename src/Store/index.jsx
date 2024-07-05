import { configureStore } from "@reduxjs/toolkit";
import DataSlices from "./Slices/DataSlices";

const store = configureStore({
  reducer: {
    data: DataSlices,
  },
});

export default store;
