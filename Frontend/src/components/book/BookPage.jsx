import { useParams } from "react-router-dom";
import { useBookStore } from "./../../store/bookStore";
import {
  BsCalendar3,
  BsCartPlus,
  BsFileEarmarkBreak,
  BsGlobe,
} from "react-icons/bs";
import { useCartStore } from "../../store/cartStore";

const BookPage = () => {
  const { books } = useBookStore();
  const { id } = useParams();
  const { addToCart } = useCartStore();
  const book = books.find((b) => b._id === id);

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
                by <span className="font-semibold">{book.authorName}</span>
              </div>

              <div className="flex items-center space-x-4 mt-4">
                <button
                  onClick={() => addToCart(book)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 flex items-center"
                >
                  <BsCartPlus />
                  Add To Cart
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
    </div>
  );
};

export default BookPage;
