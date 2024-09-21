const CartItem = ({ item, addToCart, removeFromCart }) => {
  const { image, title, author, quantity, price, id } = item;

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      addToCart({ ...item, quantity: item.quantity - 1 });
    } else {
      removeFromCart(id);
    }
  };

  return (
    <div className="flex items-start justify-between border-b border-gray-300 p-4">
      <div className="flex flex-col items-start"> 
        <img
          src={`/books/${image}`}
          alt={title}
          className="w-24 h-32 object-cover"
        />
        <div className="mt-2 flex flex-col">
          <div className="font-semibold">{title}</div>
          <div className="text-gray-600">{author}</div>
        </div>
      </div>

      <div className="flex flex-col items-end "> 
        <span className="text-lg mr-7">${price.toFixed(2)}</span>
      </div>

      <div className="flex flex-col items-end mr-7">
        <div className="flex items-center gap-4">
          <button
            className="bg-blue-600 text-white py-1 px-2 rounded"
            onClick={() => addToCart({ ...item, quantity: item.quantity + 1 })}
          >
            +
          </button>
          <span className="text-lg">{quantity}</span>
          <button
            className="bg-blue-600 text-white py-1 px-2 rounded"
            disabled={quantity <= 0}
            onClick={handleDecreaseQuantity}
          >
            -
          </button>
        </div>
      </div>

      <div className="flex flex-col items-end ml-2"> 
        <span className="text-lg">${(price * quantity).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartItem;
