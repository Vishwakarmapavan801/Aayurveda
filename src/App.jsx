import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Ecommerce from "./pages/Ecommerce";
import Order from "./pages/Order";



function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
