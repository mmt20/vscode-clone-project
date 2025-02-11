import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";
import OpenedFileBar from "./components/OpenedFileBar";
import ResizeablePanel from "./components/ResizeablePanel";

function App() {
  return (
    <div>
      <div className="flex h-screen">
        <ResizeablePanel
          showLeftPanel
          leftPanel={
            <div className="w-64 p-2 min-w-64 ">
              <RecursiveComponent fileTree={fileTree} />
            </div>
          }
          rightPanel={<OpenedFileBar />}
        />
      </div>
    </div>
  );
}

export default App;
