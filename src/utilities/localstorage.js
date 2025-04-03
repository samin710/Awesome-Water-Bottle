const getCartFromLocalStorage = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};
const addItemToCartLocalStorage = (id) => {
  const cart = getCartFromLocalStorage();
  //   cart.push(id);
  const newCart = [...cart, id];
  saveCartToLocalStorage(newCart);
};
const saveCartToLocalStorage = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};
const removeFromLocalStorage = (id) => {
  const storedCart = getCartFromLocalStorage();
  const remainingCart = storedCart.filter((storedId) => storedId !== id);
  saveCartToLocalStorage(remainingCart);
};
export {
  getCartFromLocalStorage,
  addItemToCartLocalStorage,
  removeFromLocalStorage,
};
