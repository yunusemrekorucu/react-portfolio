import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  </BrowserRouter>
);
