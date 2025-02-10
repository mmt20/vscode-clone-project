import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";
import OpenedFileBar from "./components/OpenedFileBar";

function App() {
  return (
    <div>
      <div className="flex h-screen">
        <div className="w-64 min-w-64 p-2">
          <RecursiveComponent fileTree={fileTree} />
        </div>

        <OpenedFileBar />
      </div>
    </div>
  );
}

export default App;
