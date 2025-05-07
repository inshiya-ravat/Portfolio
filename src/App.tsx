import "./App.css";
import BasicInfo from "./component/BasicInfo/BasicInfo";
import Navbar from "./component/Navbar/Navbar";
import Project from "./component/Project/Project";

function App() {
  return (
    <>
      <Navbar />
      <BasicInfo/>
      <Project/>
    </>
  );
}

export default App;
