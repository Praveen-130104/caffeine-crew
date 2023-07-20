import React, { useState } from "react";
import Home from "./pages/home";
import Menu from "./pages/menu";
import About from "./pages/about";
import Carti from "./pages/cart";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
const [cart,setCart] = useState([])

const handleClic = (item) => {
  const index = cart.findIndex((cartItem) => cartItem.name === item.name);
  if (index >= 0) {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  } else {
    const updatedCart = [...cart, { ...item, quantity: 1 }];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }
};
  return (
    <Router  >
      <Routes>
        <Route path="/menu" element={<Menu cart={cart} handleClic={handleClic} />} />
        <Route
          path="/"
          element={<Home cart={cart} handleClic={handleClic} />}
        />
        <Route path="/about" element={<About cart={cart} />} />
        <Route path="/cart" element={<Carti cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
}
	