import React, { useState } from 'react';
import { BsCartPlus } from "react-icons/bs";
import { useBookStore } from "./../../store/bookStore";
import { useCartStore } from "./../../store/cartStore";
import { useNavigate } from "react-router-dom";

import Modal from "../modal/modal";

import '@fortawesome/fontawesome-free/css/all.min.css';

export default function BookShow() {
  const { books } = useBookStore();
  const { addToCart } = useCartStore();
  const { updateReviews, wishList } = useBookStore();
  const [openModal, setOpenModal] = useState(false);
  const [bookData, setBookData] = useState(null);
  const navigate = useNavigate();

  const handleClic = (id) => {
    navigate(`/book/${id}`);
  };

  const handleOpenModal = (item) => {
    setOpenModal(true);
    setBookData(item);
  };

  return (
    <div className="flex justify-center py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mx-auto px-4">
        {books.map((book, index) => {
          console.log(book); // Log the book object
          return (
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
                    to={`/book/${book._id}`}
                    className="text-center text-blue-500 font-medium"
                  >
                    Quick view
                  </Link>
                </div>
              </div>

              <div className='absolute bottom-0 w-full px-2 opacity-0 
              translate-y-full group-hover:opacity-100 group-hover:translate-y-0 
              transition-all duration-700 ease-in-out bg-white rounded-b-xl'>
                <button 
                  onClick={() => handleOpenModal(book)}
                  className='bg-white text-black px-4 py-2 w-full rounded-b-xl'>
                  Quick view
                </button>
              </div>
            </div>

            <div className='py-4 px-2'>
              <p className='text-center'>{book.title}</p>
              <h3 className='text-center'>Price: ${book.price}</h3>
            </div>

            <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pb-2 px-2'>
              <button
                onClick={() => addToCart(book)}
                className='bg-blue-500 text-white px-4 py-2 rounded-lg w-full flex items-center justify-center gap-2'
              >
                <BsCartPlus size={20} /> Add to Cart
              </button>
            </div>
          </div>
        );
      })}
      {/* هنا يتم عرض المودال لو الـ openModal بـ true */}
      {openModal && <Modal bookData={bookData} setOpenModal={setOpenModal} />}
    </div>
  );
}
