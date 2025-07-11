import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListning from "./pages/ProductListning";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route
            path="/productlistning"
            exact={true}
            element={<ProductListning />}
          />
          <Route
            path="/productdetails/:id"
            exact={true}
            element={<ProductDetails />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
