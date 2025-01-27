import { Route, Routes } from "react-router-dom";
import { Home } from "@/features/home/pages/Home";
import { Menu } from "@/features/menu/pages/Menu";
import { Contact } from "@/features/contact/pages/Contact";
import { About } from "@/features/about/pages/About";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/index.html" element={<Home />} />
            <Route path="/dist/index.html" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};