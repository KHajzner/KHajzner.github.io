import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Navigation from "./components/Navigation/Navigation";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="about-me" element={<AboutMe />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
