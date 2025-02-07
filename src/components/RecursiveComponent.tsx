import { IFile } from "../interfaces";
import FileIcon from "./SVG/File";
import FolderIcon from "./SVG/Folder";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: IProps) => {
  return (
    <div className="mb-2 ml-2 ">
      <div className="flex items-center mb-1">
        <span className="mr-2">
          {fileTree.isFolder ? <FolderIcon /> : <FileIcon />}
        </span>
        <span>{fileTree.name}</span>
      </div>
      {fileTree.children &&
        fileTree.children.map((file, idx) => (
          <RecursiveComponent fileTree={file} key={idx} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
