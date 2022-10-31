import About from "../Pages/About/About";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Contact from "./Contact/Contact";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="shop" element={<Shop />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
};

export default Pages;
