import React from 'react'

export const Sidebar = ({cart, onIncreaseQuantity, onDecreaseQuantity}) => {
// Calculate the total amount
    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <div className="sidebar">
        <div className="cart">
            <h2>Cart:</h2>
        <ul className='cartlist'>
          {cart && cart.length > 0 ? (
            cart.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.name} height={'50px'} />
                <span>{item.name}</span> 
                <span>₹{item.price}</span>
                <span>Quantity: {item.quantity}</span> 
                <button onClick={() => onIncreaseQuantity(item.name)}>+ add</button>
                <button onClick={() => onDecreaseQuantity(item.name)}>- remove</button>
                </li>
            ))
          ) : (
            <li>No items in the cart</li>
          )}
        </ul>
        <h3>Total Amount: ₹{totalAmount}</h3>
        </div>
    </div>
  )
}
