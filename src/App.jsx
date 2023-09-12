import React from "react";
import Home from "./pages/home/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store/Store";
import { Route, Routes } from "react-router";
import About from "./pages/about/About";
import Privacy from "./pages/privacy/Privacy";
import Blog from "./pages/blog/Blog";
import Layout from "./pages/layout/Layout";

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
        </Routes>
      </Provider>
    </div>
  );
}
