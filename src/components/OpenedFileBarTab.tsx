import { useDispatch } from "react-redux";
import { IFile } from "../interfaces";
import CloseIcon from "./SVG/CloseIcon";
import RenderFileIcon from "./SVG/RenderFileIcon";
import { setClickedFileAction } from "../app/features/fileTreeSlice";

interface IProps {
  file: IFile;
}

const OpenedFileBarTab = ({ file }: IProps) => {
  const dispatch = useDispatch();
  // ** Handlers
  const onClick = () => {
    const { name, content } = file;
    dispatch(setClickedFileAction({ filename: name, fileContnet: content }));
  };
  return (
    <div className="flex items-center  p-2" onClick={onClick}>
      <RenderFileIcon filename={file.name} />

      <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-2 p-1 rounded-md">
        {file.name}
      </span>
      <span className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md">
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpenedFileBarTab;
