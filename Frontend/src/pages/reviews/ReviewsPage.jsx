
import { useState } from "react";
import { useReviewStore } from "../../store/reviewStore";
import { books } from "../../data/books"; // Adjust the path as necessary

const ReviewsPage = () => {

    const [showModal, setShowModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    const reviewsStore = useReviewStore((state) => state.reviews);
    
    const handleImageClick = (book) => {
        setSelectedBook(book);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedBook(null);
    };

    // Getting reviews based on selectedBook
    const reviews = selectedBook ? reviewsStore[selectedBook.title] || [] : [];


    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl text-blue-700 font-bold mb-4 pt-10 pb-5">Book Reviews</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {books.map((book) => (
                    <div
                        key={book.id}
                        className="bg-gray-100 p-10 rounded-md cursor-pointer"
                        onClick={() => handleImageClick(book)}
                    >
                        <img
                            src={book.image}
                            alt={book.title}
                            className="w-44 h-55 rounded-md"
                        />
                        <h2 className="text-lg font-bold mt-2">{book.title}</h2>
                        <p className="text-gray-600">{book.author}</p>
                    </div>
                ))}
            </div>

            {showModal && selectedBook && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center">
                    <div className="bg-white p-8 md:p-12 lg:p-16 rounded-lg shadow-lg transition-transform transform scale-105">
                        <h2 className="text-2xl font-bold mb-6 text-gray-600">{selectedBook.title} Reviews</h2>
                        {reviews.length > 0 ? (
                            reviews.map((review, index) => (
                                <div key={index} className="bg-gray-100 p-5 rounded-md mb-4 shadow-sm">
                                    <p className="text-blue-500">{review}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-600">No reviews yet for this book.</p>
                        )}
                        <div className="flex justify-end mt-6">
                            <button
                                onClick={handleCloseModal}
                                className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReviewsPage;
