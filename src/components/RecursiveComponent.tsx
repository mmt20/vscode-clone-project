import { useState } from "react";
import { IFile } from "../interfaces";

import RightArrowIcon from "./SVG/Right";
import BottomArrowIcon from "./SVG/Bottom";
import RenderFileIcon from "./SVG/RenderFileIcon";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({
  fileTree: { name, isFolder, children },
}: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  // ** Handlers
  const Toggle = () => setIsOpen((prev) => !prev);
  return (
    <div className="mb-2 ml-2 cursor-pointer">
      <div className="flex items-center mb-1">
        {isFolder ? (
          <div className="flex items-center " onClick={Toggle}>
            {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
            <RenderFileIcon
              filename={name}
              isFolder={isFolder}
              isOpen={isOpen}
            />
            <span className="ml-2">{name}</span>
          </div>
        ) : (
          <div className="flex items-center mr-2">
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
