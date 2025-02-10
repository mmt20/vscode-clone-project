import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interfaces";
import CloseIcon from "./SVG/CloseIcon";
import RenderFileIcon from "./SVG/RenderFileIcon";
import { setClickedFileAction } from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";

interface IProps {
  file: IFile;
}

const OpenedFileBarTab = ({ file }: IProps) => {
  const dispatch = useDispatch();

  const {
    clickedFile: { activeTabId },
  } = useSelector((state: RootState) => state.tree);
  // ** Handlers
  const onClick = () => {
    const { id, name, content } = file;
    dispatch(
      setClickedFileAction({
        filename: name,
        fileContnet: content,
        activeTabId: id,
      })
    );
  };
  return (
    <div
      className={`flex items-center p-2 border-t-2 ${
        file.id === activeTabId ? "border-[#cf6ccf]" : "border-transparent"
      }`}
      onClick={onClick}
      // style={{
      //   borderTop:
      //     file.id === activeTabId
      //       ? "2px solid #cf6ccf"
      //       : "2px solid transparent",
      // }}
    >
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
