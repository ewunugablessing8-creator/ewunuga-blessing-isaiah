import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
// import Graphic from "./projects/Graphic";
// import Web from "./projects/Web";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/projects/graphic-design" element={<Graphic />} />
        <Route path="/projects/web-design" element={<Web />} /> */}
      </Routes>
    </BrowserRouter>
  );
}


export default App;