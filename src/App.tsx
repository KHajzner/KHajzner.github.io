import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Walk from "./Walk/Walk";
import Library from "./Library/Library";
import Backlog from "./Backlog/Backlog";
import AboutMe from "./About Me/AboutMe";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/walk" element={<Walk />} />
        <Route path="/library" element={<Library />} />
        <Route path="/backlog" element={<Backlog />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
