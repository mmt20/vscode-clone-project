import FileComponent from "./components/FileComponent";
import FolderComponent from "./components/FolderComponent";

function App() {
  return (
    <div className="m-7">
      <FileComponent filename="index.ts" />
      <FolderComponent foldername="node_modules" />
    </div>
  );
}

export default App;
