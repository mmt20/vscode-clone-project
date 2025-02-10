import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";
import OpenedFileBar from "./components/OpenedFileBar";

function App() {
  return (
    <div>
      <div className="flex h-screen">
        <div className="w-64 border-r border-white border-opacity-10">
          <RecursiveComponent fileTree={fileTree} />
        </div>

        <OpenedFileBar />
      </div>
    </div>
  );
}

export default App;
