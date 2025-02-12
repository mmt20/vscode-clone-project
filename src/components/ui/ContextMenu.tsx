interface IProps {
  postions: { x: number; y: number };
}

const ContextMenu = ({ postions }: IProps) => {
  return (
    <ul
      className=" bg-white border border-gray-300 rounded-md shadow-lg py-1 w-32 text-black px-7"
      style={{ position: "absolute", top: postions.y, left: postions.x }}
    >
      <li>Close</li>
      <li>Close All</li>
    </ul>
  );
};

export default ContextMenu;
