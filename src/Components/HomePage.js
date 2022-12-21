import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home"

const HomePage=()=>{
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="About" element={<About/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default HomePage