import OrderSummary from "./OrderSummary";
import CartItem from "./CartItem";
import { useContext } from "react";
import CartContext from "../../context/cartContext";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);

  return (
    <div className="p-10 flex flex-col items-center bg-gray-100">
      <h1 className="font-bold text-3xl mb-8 text-gray-800">Shopping Cart</h1>
      <div className="flex flex-wrap justify-between gap-5 w-full max-w-5xl">
        <div className="flex-grow max-w-md w-full">
          <div className="grid grid-cols-4 p-2 font-bold text-blue-600 text-lg mb-5 text-center gap-x-7">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>
          
          <div className="w-full">
            {cartItems.length ? (
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  removeFromCart={removeFromCart}
                  addToCart={addToCart}
                  item={item}
                />
              ))
            ) : (
              <div className="text-lg text-gray-500 text-center">Your cart is empty.</div>
            )}
          </div>
        </div>
        <OrderSummary totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default Cart;
