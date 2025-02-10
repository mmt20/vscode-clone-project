import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFileBarTab from "./OpenedFileBarTab";

// interface IProps {}

const OpenedFileBar = () => {
  const { opendFiles, clickedFile } = useSelector(
    (state: RootState) => state.tree
  );
  return (
    <div>
      <div className="flex items-center">
        {opendFiles.map((file) => (
          <OpenedFileBarTab key={file.id} file={file} />
        ))}
      </div>
      {clickedFile.fileContnet}
    </div>
  );
};

export default OpenedFileBar;
