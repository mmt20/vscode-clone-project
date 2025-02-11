import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";
import ResizeablePanel from "./components/ResizeablePanel";
import Preview from "./components/Preview";
import { RootState } from "./app/store";
import { useSelector } from "react-redux";
import WelcomeTab from "./components/WelcomeTab";

function App() {
  const { opendFiles } = useSelector(({ tree }: RootState) => tree);
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
          rightPanel={opendFiles.length ? <Preview /> : <WelcomeTab />}
        />
      </div>
    </div>
  );
}

export default App;
