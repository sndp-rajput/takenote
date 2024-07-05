import { createSlice } from "@reduxjs/toolkit";
import reactUniqueIds from "react-unique-ids";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    demo: 0,
    selectedTab: "folder-notes",
    tabs: ["folder-notes", "folder-fav", "folder-del", "folder-profile"],
    selectedFile: false,
    preFolder: {},
    newFolder: {
      "file-tjfbjytfvjyt": {
        name: "my folder",
      },
    },
  },
  reducers: {
    setSelectedTab(state, action) {
      state.selectedTab = action.payload;
    },
  },
});

export const { setSelectedTab } = dataSlice.actions;

export default dataSlice.reducer;
