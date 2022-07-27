import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./components/MainPage";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import FourthPage from "./components/FourthPage";
import FifthPage from "./components/FifthPage";
import SixthPage from "./components/SixthPage";
import SeventhPage from "./components/SeventhPage";
import EightthPage from "./components/EightthPage";
import NinthPage from "./components/NinthPage";
import TenthPage from "./components/TenthPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/1" element={<FirstPage />} />
        <Route path="/2" element={<SecondPage />} />
        <Route path="/3" element={<ThirdPage />} />
        <Route path="/4" element={<FourthPage />} />
        <Route path="/5" element={<FifthPage />} />
        <Route path="/6" element={<SixthPage />} />
        <Route path="/7" element={<SeventhPage />} />
        <Route path="/8" element={<EightthPage />} />
        <Route path="/9" element={<NinthPage />} />
        <Route path="/10" element={<TenthPage />} />
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);
