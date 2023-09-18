import FloatingMenu from "./components/FloatingMenu";
import "./index.css";

function App() {
  return (
    <>
    <div className="h-full">
      {/* <div className="mask">
        <ul>
          <li>About</li>
          <li>About</li>
          <li>About</li>
        </ul>
      </div> */}
      <FloatingMenu />
      <div className="body">
        <h1>My Portfolio</h1>
      </div>
    </div>
    </>
  );
}

export default App;
