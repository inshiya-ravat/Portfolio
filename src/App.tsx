import "./App.css";
import About from "./component/About/About";
import BasicInfo from "./component/BasicInfo/BasicInfo";
import Navbar from "./component/Navbar/Navbar";
import Project from "./component/Project/Project";

function App() {
  return (
    <>
      <Navbar />
      <BasicInfo/>
      <Project/>
      <About/>
    </>
  );
}

export default App;
