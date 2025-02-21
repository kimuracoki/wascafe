import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "@/features/home/Home";
import { Menu } from "@/features/menu/Menu";
import { Contact } from "@/features/contact/Contact";
import { About } from "@/features/about/About";
import { useEffect } from "react";

export const Router = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = sessionStorage.getItem("redirect");

    if (redirectPath) {
      console.log("Redirect Path:", redirectPath); // デバッグログ
      sessionStorage.removeItem("redirect");
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);
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
