import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IClickedFile {
  filename: string;
  fileContnet: string;
}
interface IInitialState {
  opendFiles: IFile[];
  clickedFIle: IClickedFile;
}
const initialState: IInitialState = {
  opendFiles: [],
  clickedFIle: {
    filename: "",
    fileContnet: "",
  },
};

export const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOPendFiles: (state, action: PayloadAction<IFile[]>) => {
      state.opendFiles = action.payload;
    },
  },
});

export const { setOPendFiles } = fileTreeSlice.actions;

export default fileTreeSlice.reducer;
