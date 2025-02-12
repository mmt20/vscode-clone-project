import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setOPendFilesAction } from "../../app/features/fileTreeSlice";
import { RootState } from "../../app/store";
interface IProps {
  postions: { x: number; y: number };
  setShowMenu: (val: boolean) => void;
}

const ContextMenu = ({ postions, setShowMenu }: IProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const { opendFiles, tabIdtoRemove } = useSelector(
    (state: RootState) => state.tree
  );

  useEffect(() => {
    const handelClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node))
        setShowMenu(false);
    };

    window.addEventListener("click", handelClickOutside);

    return () => {
      window.removeEventListener("click", handelClickOutside);
    };
  }, [setShowMenu]);

  // ** Handlers
  const handelCloseAll = () => {
    dispatch(setOPendFilesAction([]));
    setShowMenu(false);
  };
  const handelClose = () => {
    const filtered = opendFiles.filter((file) => file.id !== tabIdtoRemove);
    dispatch(setOPendFilesAction(filtered));
    setShowMenu(false);
  };
  return (
    <div ref={menuRef}>
      <ul
        className="cursor-pointer bg-white border border-gray-300 rounded-md shadow-lg py-1 w-40 text-gray-800"
        style={{ position: "absolute", top: postions.y, left: postions.x }}
      >
        <li
          className="px-2 py-2 text-center hover:bg-gray-200"
          onClick={handelClose}
        >
          Close
        </li>
        <li
          className="px-2 py-2 text-center hover:bg-gray-200"
          onClick={handelCloseAll}
        >
          Close All
        </li>
      </ul>
    </div>
  );
};

export default ContextMenu;
