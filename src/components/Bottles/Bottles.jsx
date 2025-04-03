import React, { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import {
  addItemToCartLocalStorage,
  getCartFromLocalStorage,
  removeFromLocalStorage,
} from "../../utilities/localstorage";
import Cart from "../../Cart/Cart";

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);
  //   console.log(bottles);
  const [cart, setCart] = useState([]);

  // const items = getCartFromLocalStorage()
  // console.log(items);

  useEffect(() => {
    const items = getCartFromLocalStorage();
    // console.log(items);
    const storedCart = [];
    for (let i of items) {
      console.log(i);
      const cartBottle = bottles.find((bottle) => bottle.id === i);
      if (cartBottle) {
        storedCart.push(cartBottle);
      }
    }
    setCart(storedCart);
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addItemToCartLocalStorage(bottle.id);
  };
  const handleRemoveFromCart = (id) => {
    // console.log("Remove", id);
    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
    removeFromLocalStorage(id);
  };
  return (
    <div>
      <h2>Bottle: {bottles.length}</h2>
      <h3>Added to cart: {cart.length}</h3>
      <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
