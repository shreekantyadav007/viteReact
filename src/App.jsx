import { useState } from "react";
import Nav from "./component/Nav";
import { Main } from "./component/Main";
import PaymentPage from "./component/PaymentPage";
import { CartProvider } from "./component/CartContext";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <CartProvider>
      <Router>
        <Nav />
        <div className="wrapper">
          <Routes>
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
