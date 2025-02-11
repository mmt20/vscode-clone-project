import { extionsIconsPaths } from "../../constant";
import IconImg from "../IconImg";
import FileIcon from "./File";

interface FileIconProps {
  filename: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

const RenderFileIcon = ({
  filename,
  isFolder = false,
  isOpen = false,
}: FileIconProps) => {
  // Helper function to get file extension
  const getFileExtension = (filename: string): string | undefined => {
    const parts = filename.split(".");
    return parts.length > 1 ? parts.pop()?.toLowerCase() : undefined;
  };

  // Handle folder icons
  if (isFolder) {
    const folderIcon = isOpen
      ? "/icons/folder-default-open.svg"
      : "/icons/folder-default.svg";
    return <IconImg src={folderIcon} />;
  }

  // Handle file icons
  const extension = getFileExtension(filename);
  if (extension && extension in extionsIconsPaths) {
    return <IconImg src={`${extionsIconsPaths[extension]}.svg`} />;
  }

  // Default file icon
  return <FileIcon />;
};

export default RenderFileIcon;
