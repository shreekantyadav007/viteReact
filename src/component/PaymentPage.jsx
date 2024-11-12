import React, { useState } from "react";
import { useCart } from "./CartContext";
import "./payment.css";
import { Link } from "react-router-dom";
const PaymentPage = () => {
  const { cart, setCart } = useCart();
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing here
    console.log("Payment submitted:", { cardNumber, expiryDate, cvv, cart });
  };

  function handleIncreaseQuantity(productName) {
    setCart(
      cart.map((item) =>
        item.name === productName
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function handleDecreaseQuantity(productName) {
    setCart(
      cart
        .map((item) => {
          if (item.name === productName) {
            const newQuantity = item.quantity - 1;
            if (newQuantity <= 0) {
              // Remove item from cart if quantity is 0
              return null;
            }
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter((item) => item !== null)
    ); // Filter out null items
  }
  return (
    <>
      <div className="main">
        <h1>Payment Page</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Card Number:</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Expiry Date:</label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label>CVV:</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </div>
          <button type="submit">Pay Now</button>
        </form>
      </div>
      <div className="sidebar">
        <div className="cart" id="cart">
          <h2>Cart:</h2>
          <ul className="cartlist">
            {cart && cart.length > 0 ? (
              cart.map((item, index) => (
                <li key={index}>
                  <img src={item.image} alt={item.name} height={"50px"} />
                  <span>{item.name}</span>
                  <span>₹{item.price}</span>
                  <span>Quantity: {item.quantity}</span>
                  <button onClick={() => handleIncreaseQuantity(item.name)}>
                    + add
                  </button>
                  <button onClick={() => handleDecreaseQuantity(item.name)}>
                    - remove
                  </button>
                </li>
              ))
            ) : (
              <li>No items in the cart</li>
            )}
          </ul>
          <h3>Total Amount: ₹{totalAmount}</h3>
          
          <Link to="/" className="btn">
           Go back to shopping
          </Link>
         
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
