import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "../components/Navbarr";

const Routs = () => {
    return (  
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar />} />
            {/* <Route path="/cadastro" element={<Cadrastro />} />
            <Route path="/tarefas" element={<Tarefas />} />
            <Route path="/*" element={<NaoEncotrada />} /> */}
        </Routes>
        </BrowserRouter>
     );
}
 
export default Routs;