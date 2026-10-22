import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import PageLayout from "../layouts/PageLayout";

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Rotas;
