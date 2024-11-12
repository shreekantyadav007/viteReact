import React, { useState } from "react";
import { Product } from "./Product";
import { Sidebar } from "./Sidebar";
import { useCart } from "./CartContext";
export const Main = () => {
  const { cart, setCart } = useCart();
  const products = [
    {
      name: "product 1",
      image: "https://placehold.jp/300x300.png?text=Product1",
      price: 999,
      quantity: 1,
    },
    {
      name: "product 2",
      image: "https://placehold.jp/300x300.png?text=Product2",
      price: 949,
      quantity: 1,
    },
    {
      name: "product 3",
      image: "https://placehold.jp/300x300.png?text=Product3",
      price: 899,
      quantity: 1,
    },
    {
      name: "product 4",
      image: "https://placehold.jp/300x300.png?text=Product4",
      price: 849,
      quantity: 1,
    },
    {
      name: "product 5",
      image: "https://placehold.jp/300x300.png?text=Product5",
      price: 749,
      quantity: 1,
    },
    {
      name: "product 6",
      image: "https://placehold.jp/300x300.png?text=Product6",
      price: 999,
      quantity: 1,
    },
    {
      name: "product 7",
      image: "https://placehold.jp/300x300.png?text=Product7",
      price: 799,
      quantity: 1,
    },
    {
      name: "product 8",
      image: "https://placehold.jp/300x300.png?text=Product8",
      price: 699,
      quantity: 1,
    },
    {
      name: "product 9",
      image: "https://placehold.jp/300x300.png?text=Product9",
      price: 599,
      quantity: 1,
    },
  ];

  function handleClick(product) {
    const existingProduct = cart.find((item) => item.name === product.name);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Add new product to cart
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    alert(`${product.name} added to cart!`);
    
  }

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
        {products.map((product) => (
          <Product
            key={product.name}
            name={product.name}
            imageUrl={product.image}
            price={product.price}
            quantity={product.quantity}
            handleClick={
              (() => handleClick(product))
            }
          />
        ))}
      </div>
      <Sidebar
        cart={cart}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
       
      />
    </>
  );
};
