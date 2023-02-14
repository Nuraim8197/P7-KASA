
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./page/About/About";
import Home from "./page/Home/Home";
import Logement from "./page/Logement/Logement";
import Error from "./page/Error/Error";



export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Logement/:id" element={<Logement />} />
          <Route path="/About" element={<About />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    );
  }