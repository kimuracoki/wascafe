import { Route, Routes } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Menu } from "@/pages/Menu";
import { Contact } from "@/pages/Contact";
import { About } from "@/pages/About";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};