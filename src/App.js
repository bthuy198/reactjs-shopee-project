import Auth from "feature/Auth";
import Cart from "feature/Cart";
import Detail from "feature/Detail";
import Home from "feature/Home";
import Order from "feature/Order";
import Product from "feature/Product";
import User from "feature/User";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Auth title={"login"} />} />
          <Route path="/signup" element={<Auth title={"signup"} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Order />} />

          <Route path="/products">
            <Route path="" element={<Product />} />
            <Route path="detail/:productId" element={<Detail />} />
          </Route>
          <Route path="/user">
            <Route path="" element={<User title={"info"} />} />
            <Route path="info" element={<User title={"info"} />} />
            <Route path="address" element={<User title={"address"} />} />
            <Route path="password" element={<User title={"password"} />} />
            <Route path="purchase" element={<User title={"purchase"} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
