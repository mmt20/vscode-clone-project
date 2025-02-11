import { useState } from "react";
import { IFile } from "../interfaces";

import RightArrowIcon from "./SVG/Right";
import BottomArrowIcon from "./SVG/Bottom";
import RenderFileIcon from "./SVG/RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  setClickedFileAction,
  setOPendFilesAction,
} from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";
import { doesFileObjectExist } from "../utils/functions";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: IProps) => {
  const { id, name, isFolder, children, content } = fileTree;
  const { opendFiles } = useSelector((state: RootState) => state.tree);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  // ** Handlers
  const Toggle = () => setIsOpen((prev) => !prev);

  const onFileClick = () => {
    const exists = doesFileObjectExist(opendFiles, id);
    dispatch(
      setClickedFileAction({
        filename: name,
        fileContent: content,
        activeTabId: id,
      })
    );
    if (exists) return;

    dispatch(setOPendFilesAction([...opendFiles, fileTree]));
  };
  return (
    <div className="mb-2 ml-2 cursor-pointer">
      <div className="flex items-center mb-1.5">
        {isFolder ? (
          <div className="flex items-center " onClick={Toggle}>
            <span className="mr-2">
              {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
            </span>
            <RenderFileIcon
              filename={name}
              isFolder={isFolder}
              isOpen={isOpen}
            />
            <span className="ml-2">{name}</span>
          </div>
        ) : (
          <div className="flex items-center ml-2" onClick={onFileClick}>
            <RenderFileIcon filename={name} />
            <span className="ml-2">{name}</span>
          </div>
        )}
      </div>
      {isOpen &&
        children &&
        children.map((file, idx) => (
          <RecursiveComponent fileTree={file} key={idx} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
