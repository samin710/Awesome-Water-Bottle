import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div className="cart-container">
      {cart.map((bottle) => (
        <div key={bottle.id}>
          <div style={{ display: "flex" }}>
            <img src={bottle.img} alt="" />
            <button onClick={() => handleRemoveFromCart(bottle.id)}>X</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
