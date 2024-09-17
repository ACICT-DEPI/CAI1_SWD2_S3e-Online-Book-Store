import { useParams } from "react-router-dom";
import { books } from "../../data/books";

import { useState } from "react";

const BookPage = () => {
  const { id } = useParams();
  const [qty, setQty] = useState(1);

  const book = books.find((b) => b.id === +id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <img
            src={`/books/${book.image}`}
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
                <input
                  className="border border-gray-300 rounded-md p-2 w-24 text-center"
                  type="number"
                  min="1"
                  max="100"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                />
                <button
                  onClick={() => addToCart(book, qty)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 flex items-center"
                >
                  <i className="bi bi-cart-plus mr-2"></i>
                  Add To Cart
                </button>
              </div>
            </div>
            <p className="text-gray-700 mt-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium molestiae corporis facere minima consequuntur,
              blanditiis voluptatem praesentium possimus odit, aliquam
              temporibus nulla! Delectus quas totam nihil est reiciendis sunt.
              Ex. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
              veritatis vitae hic corrupti voluptas dignissimos consequatur
              doloribus laborum adipisci quo voluptates dolorum cumque tempora
              expedita possimus, ab quae tenetur fugit. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Laudantium fugit illo porro
              perspiciatis fuga doloremque placeat assumenda labore! Harum
              numquam voluptate eveniet libero debitis consequuntur nostrum
              reiciendis officiis delectus rem.
            </p>
          </div>
        </div>
        <div className="bg-gray-100 p-6 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="flex items-center space-x-3">
            <i className="bi bi-file-earmark-break text-gray-600 text-xl"></i>
            <div>
              <small className="text-gray-500">Print Length</small>
              <p className="text-gray-700 font-semibold">
                {book.printLength} pages
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <i className="bi bi-globe text-gray-600 text-xl"></i>
            <div>
              <small className="text-gray-500">Language</small>
              <p className="text-gray-700 font-semibold">{book.language}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <i className="bi bi-calendar3 text-gray-600 text-xl"></i>
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
