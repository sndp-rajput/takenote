import { createSlice } from "@reduxjs/toolkit";
import reactUniqueIds from "react-unique-ids";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    folPending: false,
    selectedTab: "folder-notes",
    selectedFile: "",
    tabs: ["folder-notes", "folder-fav", "folder-del", "folder-profile"],
    folders: [],
    files: [],
  },
  reducers: {
    setSelectedTab(state, action) {
      state.selectedTab = action.payload;
    },
    createFolder(state, action) {
      const id = `folder-${reactUniqueIds()}`;
      const folder = { id: id, name: action.payload };
      state.folders.unshift(folder);
    },
    handleFolPending(state) {
      state.folPending = !state.folPending;
      console.log("run");
    },
    folderRename(state, action) {
      const newFolders = state.folders.map((folder) =>
        folder.id === action.payload[0]
          ? { ...folder, name: action.payload[1] }
          : folder
      );
      state.folders = newFolders;
    },
  },
});

export const {
  setSelectedTab,
  createFolder,
  folPending,
  handleFolPending,
  folders,
  folderRename,
} = dataSlice.actions;

export default dataSlice.reducer;
