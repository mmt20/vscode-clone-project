import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFileBarTab from "./OpenedFilesBarTab";
import ContextMenu from "./ui/ContextMenu";
import { useState } from "react";

// interface IProps {}

const OpenedFileBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPostion, setMenuPostion] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const { opendFiles } = useSelector((state: RootState) => state.tree);
  return (
    <div>
      <div
        className="flex items-center border-b-[1px] border-[#333]"
        onContextMenu={(e) => {
          e.preventDefault();
          setShowMenu(true);
          setMenuPostion({ x: e.clientX, y: e.clientY });
        }}
      >
        {opendFiles.map((file) => (
          <OpenedFileBarTab key={file.id} file={file} />
        ))}
      </div>
      {showMenu && (
        <ContextMenu postions={menuPostion} setShowMenu={setShowMenu} />
      )}
    </div>
  );
};

export default OpenedFileBar;
