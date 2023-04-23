import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home"
import Certifications from "./components/Certifications/Certifications";


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}  />
        <Route exact path="/certifications" element={<Certifications />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
