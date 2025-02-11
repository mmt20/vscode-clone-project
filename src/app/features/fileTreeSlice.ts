import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IClickedFile {
  activeTabId: string | null;
  filename: string;
  fileContent: string | undefined;
}
interface IInitialState {
  opendFiles: IFile[];
  clickedFile: IClickedFile;
}
const initialState: IInitialState = {
  opendFiles: [],
  clickedFile: {
    activeTabId: null,
    filename: "",
    fileContent: "",
  },
};

export const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOPendFilesAction: (state, action: PayloadAction<IFile[]>) => {
      state.opendFiles = action.payload;
    },
    setClickedFileAction: (state, action: PayloadAction<IClickedFile>) => {
      state.clickedFile = action.payload;
    },
  },
});

export const { setOPendFilesAction, setClickedFileAction } =
  fileTreeSlice.actions;

export default fileTreeSlice.reducer;
