import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import APIFetch from "./components/APIFetch";
import ValuesList from "./components/ValuesList";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
</style>



const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<APIFetch />} />
      <Route path="variables" element={<ValuesList />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
