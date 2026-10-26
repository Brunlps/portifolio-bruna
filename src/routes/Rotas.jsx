import { BrowserRouter, Route, Routes } from "react-router";
import PageLayout from "../layouts/PageLayout";

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageLayout />}/> 
    </Routes>
  </BrowserRouter>
);

export default Rotas;
