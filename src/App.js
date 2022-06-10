import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Home/Contact";
import Home from "./components/Home/Home";
import Portfolio from "./components/Home/Portfolio";
import Service from "./components/Service/Service";
import Experience from "./components/Share/Experience";
import Footer from "./components/Share/Footer";
import Navbar from "./components/Share/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/service" element={<Service></Service>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/experience" element={<Experience></Experience>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
