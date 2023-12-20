import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Contact from "./component/Contact";
import NotFound from "./component/NotFound";
import Formulario from "./component/Formulario";

function App() {

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto/:id/:name" element={<Contact />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;