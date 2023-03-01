import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import "./App.css";
import Categories from "./pages/categories/Categories";
import Filter from "./pages/filter/Filter";
import InnerProduct from "./pages/inner-product/InnerProduct";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/product/:id" element={<InnerProduct />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
