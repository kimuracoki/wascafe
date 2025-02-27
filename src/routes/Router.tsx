import { Route, Routes } from "react-router-dom";
import { Home } from "@/features/home/Home";
import { Menu } from "@/features/menu/Menu";
import { Contact } from "@/features/contact/Contact";
import { About } from "@/features/about/About";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/index.html" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
