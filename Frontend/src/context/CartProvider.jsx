import { useState } from "react";
import cartContext from "./cartContext";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add To Cart
  const addToCart = (item) => {
    const isExist = cartItems.find((cart) => cart.id === item.id);
    if (isExist) {
      setCartItems((prev) =>
        prev.map((cartItem) => (cartItem.id === item.id ? item : cartItem))
      );
    } else {
      setCartItems((prev) => [...prev, item]);
    }
  };

  // Remove From Cart
  const removeFromCart = (id) => {
    const cart = cartItems.filter((c) => c.id !== id);
    setCartItems(cart);
  };

  return (
    <cartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        cartItemsLength: cartItems.length,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
