import "./styles.css";
import FileExplorer from "./FileExplores";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="sidebar">
          <FileExplorer />
        </div>
        <div className="content">
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
        </div>
      </div>
    </div>
  );
}
