import { extionsIconsPaths } from "../../constant";
import IconImg from "../IconImg";
import FileIcon from "./File";

interface IProps {
  filename: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

const RenderFileIcon = ({ filename, isFolder, isOpen }: IProps) => {
  const extionsion = filename.split(".").pop();
  if (
    extionsion &&
    Object.prototype.hasOwnProperty.call(extionsIconsPaths, extionsion)
  ) {
    const iconPath = isFolder
      ? isOpen
        ? `${extionsIconsPaths[extionsion]}-open.svg`
        : `${extionsIconsPaths[extionsion]}.svg`
      : `${extionsIconsPaths[extionsion]}.svg`;
    return <IconImg src={iconPath} />;
  }

  if (isFolder && !isOpen) {
    return <IconImg src="/icons/folder-default.svg" />;
  }
  if (isFolder && isOpen) {
    return <IconImg src="/icons/folder-default-open.svg" />;
  }

  return <FileIcon />;
};

export default RenderFileIcon;
