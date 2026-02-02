import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Photography from "./Photography/Photography";
import Library from "./Library/Library";
import Backlog from "./Backlog/Backlog";
import AboutMe from "./About Me/AboutMe";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/library" element={<Library />} />
        <Route path="/backlog" element={<Backlog />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
