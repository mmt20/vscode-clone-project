import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interfaces";
import CloseIcon from "./SVG/CloseIcon";
import RenderFileIcon from "./SVG/RenderFileIcon";
import {
  setClickedFileAction,
  setOPendFilesAction,
} from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";

interface IProps {
  file: IFile;
}

const OpenedFileBarTab = ({ file }: IProps) => {
  const dispatch = useDispatch();

  const {
    opendFiles,
    clickedFile: { activeTabId },
  } = useSelector((state: RootState) => state.tree);
  // ** Handlers
  const onClick = () => {
    const { id, name, content } = file;
    dispatch(
      setClickedFileAction({
        filename: name,
        fileContent: content,
        activeTabId: id,
      })
    );
  };

  const onRemove = (selectedId: string) => {
    const filtered = opendFiles.filter((file) => file.id !== selectedId);

    if (filtered.length === 0) {
      dispatch(
        setClickedFileAction({
          activeTabId: null,
          filename: "",
          fileContent: "",
        })
      );
      dispatch(setOPendFilesAction([]));
      return;
    }

    const lastFile = filtered[filtered.length - 1];

    dispatch(
      setClickedFileAction({
        activeTabId: lastFile.id,
        filename: lastFile.name,
        fileContent: lastFile.content,
      })
    );

    dispatch(setOPendFilesAction(filtered));
  };

  return (
    <div
      className={`flex items-center p-2 border-t-2 ${
        file.id === activeTabId
          ? "border-[#3B82F6] bg-[#333] text-white"
          : "border-transparent"
      }`}
      onClick={onClick}
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      <RenderFileIcon filename={file.name} />

      <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-2 p-1 rounded-md">
        {file.name}
      </span>
      <span
        className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(file.id);
        }}
      >
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpenedFileBarTab;
