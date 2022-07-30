import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Footer from "./components/Share/Footer";
import Navbar from "./components/Share/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MessengerCustomerChat from "react-messenger-customer-chat";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-black">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
      <MessengerCustomerChat
        pageId="108461971957605"
        appId="1064127487572378"
        
      />
    </div>
  );
}

export default App;
