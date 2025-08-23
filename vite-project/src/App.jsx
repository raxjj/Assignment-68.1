import React from "react";
import ProductListPage from "./ProductListPage";
import { Routes,Route } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import CartPage from "./CartPage";
import Login from "./Login";
import ForgetPassword from "./ForgetPassword";
import Signup from "./Signup";

export default function App() {
  const path=window.location.pathname
  return (
    <div className="overflow-scroll">
      <Routes>
        <Route index element={<ProductListPage/>}></Route>
        <Route path="/product/:id" element={<ProductDetail/>}></Route>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forget" element={<ForgetPassword/>}/>
        <Route path="signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}
