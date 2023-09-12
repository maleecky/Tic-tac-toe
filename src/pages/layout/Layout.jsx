import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Outlet } from "react-router";

export default function Layout() {
  const isLightTheme = useSelector((state) => state.themeToggle);
  return (
    <div
      className={`relative flex justify-between items-center flex-col ${
        isLightTheme ? "bg-white text-black" : "bg-black text-white"
      } min-h-screen w-full px-4 py-2 max-wc:px-0 md:px-[40px] md:py-[10px] max-w-screen-2xl m-auto`}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
