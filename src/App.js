import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Code from "./Screens/Code";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/codeofconduct" element={<Code />} />
          {/* <Route path="/projects" element={<Projects />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/blog" element={<Blog />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
