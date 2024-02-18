import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/stock/Home";
import Layout from "./components/stock/Layout";
import Product from "./components/stock/Product";
import Sale from "./components/stock/Sale";

const App = () => {
  const token = localStorage.getItem("token");
  //  token ? (ถ้ามี): (ถ้าไม่มี)
  return (
    <div>
      {token ? (
        <Routes>
          <Route path="/admin" element={<Layout />}>
            <Route index element={<Navigate to="/admin" />} />

            <Route path="/admin/product" element={<Product/>} />
            <Route path="/admin/sale" element={<Sale/>} />
            
          </Route>

          <Route path="/" element={<Navigate to="/admin" />} />
          <Route path="*" element={<Navigate to="/admin" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />}>
            <Route index element={<Navigate to="/Login" />} />
          </Route>

          <Route path="/" element={<Navigate to="/Login" />} />
          <Route path="*" element={<Navigate to="/Login" />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
