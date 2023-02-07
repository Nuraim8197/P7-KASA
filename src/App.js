/*import Header from './components/header/header'
import Navbar from './components/navbar/navbar'*/
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }