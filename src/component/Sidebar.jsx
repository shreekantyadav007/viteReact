import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
export const Sidebar = ({ cart, onIncreaseQuantity, onDecreaseQuantity }) => {
  // Calculate the total amount
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  window.addEventListener("scroll", function () {
    var myDiv = document.getElementById("cart");

    // Set the scroll threshold where the position should change
    if (window.scrollY > 100) {
      // Adjust 100 to the position you want
      myDiv.classList.add("fixed");
    } else {
      myDiv.classList.remove("fixed");
    }
  });
      
  return (
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
                <button onClick={() => onIncreaseQuantity(item.name)}>
                  + add
                </button>
                <button onClick={() => onDecreaseQuantity(item.name)}>
                  - remove
                </button>
              </li>
            ))
          ) : (
            <li>No items in the cart</li>
          )}
        </ul>
        <h3>Total Amount: ₹{totalAmount}</h3>
        {cart.length > 0 && (
          <Link to="/payment" className="btn">
            Proceed to Payment
          </Link>
        )}
      </div>
    </div>
  );
};
