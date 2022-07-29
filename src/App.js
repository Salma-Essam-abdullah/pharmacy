import "./App.css";
import React from "react";
import Contact from "./Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App2 from "./App2";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Service from "./pages/Service";


function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<App2 />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop" element={<Menu/>} />
            
         
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
