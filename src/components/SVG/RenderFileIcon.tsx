import IconImg from "../IconImg";
import FileIcon from "./File";

interface IProps {
  filename: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

const RenderFileIcon = ({ filename, isFolder, isOpen }: IProps) => {
  const extionsion = filename.split(".").pop();

  if (extionsion === "tsx") {
    return <IconImg src="/icons/react_ts.svg" />;
  }
  if (extionsion === "js") {
    return <IconImg src="/icons/javascript.svg" />;
  }
  if (extionsion === "jsx") {
    return <IconImg src="/icons/react.svg" />;
  }
  if (extionsion === "html") {
    return <IconImg src="/icons/html.svg" />;
  }
  // ** Folders
  if (extionsion === "node_modules" && isFolder) {
    return isOpen ? (
      <IconImg src="/icons/folder-node-open.svg" />
    ) : (
      <IconImg src="/icons/folder-node.svg" />
    );
  }
  if (extionsion === "public" && isFolder) {
    return isOpen ? (
      <IconImg src="/icons/folder-public-open.svg" />
    ) : (
      <IconImg src="/icons/folder-public.svg" />
    );
  }

  if (extionsion === "src" && isFolder) {
    return isOpen ? (
      <IconImg src="/icons/folder-src-open.svg" />
    ) : (
      <IconImg src="/icons/folder-src.svg" />
    );
  }
  if (extionsion === "components" && isFolder) {
    return isOpen ? (
      <IconImg src="/icons/folder-components-open.svg" />
    ) : (
      <IconImg src="/icons/folder-src.svg" />
    );
  }
  if (isFolder) {
    return isOpen ? (
      <IconImg src="/icons/folder-default-open.svg" />
    ) : (
      <IconImg src="/icons/folder-default.svg" />
    );
  }
  return <FileIcon />;
};

export default RenderFileIcon;
