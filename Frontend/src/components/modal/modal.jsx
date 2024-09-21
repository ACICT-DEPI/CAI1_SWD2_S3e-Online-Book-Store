import "./Modal.css";
import Rating from "../../components/book-slider/Rating"; 
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import CartContext from "../../context/cartContext";
import { BsXCircleFill, BsCartPlus } from "react-icons/bs";

const Modal = ({ bookData, setOpenModal }) => {
  const { addToCart } = useContext(CartContext);
  const [qty, setQty] = useState(1);

  const { title, image, author, price, rating, reviews, inStock, id } = bookData;

  return (
    <div
      onClick={() => setOpenModal(false)}
      className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative"
      >
        <button
          onClick={() => setOpenModal(false)}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
        >
          <BsXCircleFill className="text-2xl" />
        </button>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={`/books/${image}`}
              alt={title}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-2/3 md:ml-6 flex flex-col justify-between">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p
              className={`text-lg mb-2 font-medium ${
                inStock ? "text-green-600" : "text-red-600"
              }`}
            >
              {inStock ? "In Stock" : "Out of Stock"}
            </p>
            <Rating rating={rating} reviews={reviews} />
            <p className="text-lg mb-2">
              <strong>Author:</strong> {author}
            </p>
            <p className="text-lg mb-4">
              <strong>Price:</strong> ${price}
            </p>
            <div className="flex items-center mb-4">
              <input
                type="number"
                min="1"
                max="100"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 mr-4 w-20 text-center"
              />
              <button
                onClick={() => addToCart({ ...bookData, quantity: qty })}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center"
              >
                <BsCartPlus size={20} /> Add To Cart
              </button>
            </div>
            <Link
              to={`/book/${id}`}
              className="text-blue-500 hover:text-blue-700"
              onClick={() => setOpenModal(false)}
            >
              See More Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
