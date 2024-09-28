import React from "react";
import { BsCartPlus } from "react-icons/bs";
import { useBookStore } from "./../../store/bookStore";
import { useCartStore } from "./../../store/cartStore";

export default function BookShow() {
  const { books } = useBookStore();
  const { addToCart } = useCartStore();

  return (
    <div className="flex justify-center py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mx-auto px-4">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer group hover:shadow-2xl transition-transform transform hover:scale-105 w-full max-w-md"
          >
            <div className="relative">
              <img
                src={book.image}
                alt={book.title}
                className="w-full aspect-[3/4] object-cover rounded-t-lg"
              />
              <div
                className="absolute top-3 right-3 flex flex-col space-y-2 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
              ></div>
              <div
                className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-white 
                opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
              >
                <Link
                  to={`/book/${book.id}`}
                  className="text-center text-blue-500 font-medium"
                >
                  Quick view
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-between p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {book.title}
              </h3>

              <h3 className="text-lg font-semibold text-gray-900">
                Price: ${book.price}
              </h3>
            </div>

            <div className="p-4">
              <button
                onClick={() => addToCart(book)}
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
              >
                <BsCartPlus size={20} /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
