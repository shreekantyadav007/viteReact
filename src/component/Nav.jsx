import React from "react";
import './Nav.css'
export default function Nav() {
  return (
  <>
  <nav>
    <div className="logo">
      <a href="https://in.puma.com/">
      Puma
      </a>
      <img src="https://in.puma.com/_next/static/assets/icons/puma-logo.svg#icon" alt="" height={'50px'} />
    </div>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Categories</a></li>
      <li><a href="#">About Us</a></li>
    </ul>
  </nav>
  </>
  );
}
