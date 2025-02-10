import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IClickedFile {
  filename: string;
  fileContnet: string | undefined;
}
interface IInitialState {
  opendFiles: IFile[];
  clickedFile: IClickedFile;
}
const initialState: IInitialState = {
  opendFiles: [],
  clickedFile: {
    filename: "",
    fileContnet: "",
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
      state.clickedFile.filename = action.payload.filename;
      state.clickedFile.fileContnet = action.payload.fileContnet;
    },
  },
});

export const { setOPendFilesAction, setClickedFileAction } =
  fileTreeSlice.actions;

export default fileTreeSlice.reducer;
