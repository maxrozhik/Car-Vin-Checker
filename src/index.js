import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ValuesList from "./valuesList";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="variables" element={<ValuesList />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
