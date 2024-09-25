import { useParams } from "react-router-dom";
import { useState } from "react";
import { useBookStore } from "./../../store/bookStore";
import {
  BsCalendar3,
  BsCartPlus,
  BsFileEarmarkBreak,
  BsGlobe,
} from "react-icons/bs";
import { useCartStore } from "../../store/cartStore";
import { useReviewStore } from "../../store/reviewStore";

const BookPage = () => {
  const { books } = useBookStore();
  const { id } = useParams();
  const { addToCart } = useCartStore();
  const addReview = useReviewStore((state) => state.addReview);
  const book = books.find((b) => b._id === id);

  const [showModal, setShowModal] = useState(false);
  const [reviewText, setReviewText] = useState("");

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    addReview(book.title, reviewText); // Using book.title as key for reviews
    setReviewText(""); 
    setShowModal(false); 
};

  

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <img
            src={book.image}
            alt={book.title}
            className="w-full md:w-1/3 h-64 object-cover"
          />
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
              <div className="text-gray-600 mb-4">
                by <span className="font-semibold">{book.author}</span>
              </div>

              <div className="flex items-center space-x-4 mt-4">
                <button
                  onClick={() => addToCart(book)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 flex items-center"
                >
                  <BsCartPlus />
                  Add To Cart
                </button>
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600"
                >
                  Give a Review
                </button>
              </div>
            </div>
            <p className="text-gray-700 mt-6">{book.description}</p>
          </div>
        </div>
        <div className="bg-gray-100 p-6 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="flex items-center space-x-3">
            <BsFileEarmarkBreak className="text-gray-600 text-xl" />
            <div>
              <small className="text-gray-500">Print Length</small>
              <p className="text-gray-700 font-semibold">
                {book.printLength} pages
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <BsGlobe className="text-gray-600 text-xl" />
            <div>
              <small className="text-gray-500">Language</small>
              <p className="text-gray-700 font-semibold">{book.language}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <BsCalendar3 className="text-gray-600 text-xl" />
            <div>
              <small className="text-gray-500">Publication Date</small>
              <p className="text-gray-700 font-semibold">
                {book.PublicationDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Reviews</h2>
            <form onSubmit={handleReviewSubmit}>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write your review..."
                className="w-full p-2 border border-gray-300 rounded-md"
                rows="4"
              />
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-2"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookPage;