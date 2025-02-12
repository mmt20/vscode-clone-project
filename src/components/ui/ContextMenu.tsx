import { useEffect, useRef } from "react";
interface IProps {
  postions: { x: number; y: number };
  setShowMenu: (val: boolean) => void;
}

const ContextMenu = ({ postions, setShowMenu }: IProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  console.log(menuRef);
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
  return (
    <div ref={menuRef}>
      <ul
        className=" bg-white border border-gray-300 rounded-md shadow-lg py-1 w-32 text-black px-7"
        style={{ position: "absolute", top: postions.y, left: postions.x }}
      >
        <li>Close</li>
        <li>Close All</li>
      </ul>
    </div>
  );
};

export default ContextMenu;

// ** UseEffect
// ** Click Event
// ** Menu Ref => useRef ✅
