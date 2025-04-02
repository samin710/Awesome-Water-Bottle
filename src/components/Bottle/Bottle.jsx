import React, { useState } from "react";
import "./Bottle.css";

const Bottle = ({ bottle, handleAddToCart }) => {
  const { img, name, stock, price } = bottle;
  const [quantity, setQuantity] = useState(stock);
  const handleQuantity = (stock) => {
    setQuantity(stock - 1);
  };
  return (
    <div className="card bottle">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h3>${price}</h3>
      <p>{quantity} remaining</p>
      <button
        onClick={() => {
          handleAddToCart(bottle);
          handleQuantity(quantity);
        }}
      >
        Buy now
      </button>
    </div>
  );
};

export default Bottle;
