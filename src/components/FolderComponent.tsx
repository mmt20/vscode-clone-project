import FolderIcon from "./SVG/Folder";

interface IProps {
  foldername: string;
}

const FolderComponent = ({ foldername }: IProps) => {
  return (
    <div className=" flex items-center mb-2">
      <span className="mr-2">
        <FolderIcon />
      </span>
      <span>{foldername}</span>
    </div>
  );
};

export default FolderComponent;
