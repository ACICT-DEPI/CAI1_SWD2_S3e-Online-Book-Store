import { useBookStore } from "../store/bookStore";
import { LuTrash } from "react-icons/lu";
import Button from "./ui/Button";
import Modal from "./ui/Modal";
import { useState } from "react";

const BooksList = () => {
  const { deleteBook, books } = useBookStore();
  const [selectedBookId, setSelectedBookId] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);
  return (
    <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
      <table className=" min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
            >
              Book
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
            >
              Price
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
            >
              Category
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="bg-blue-500 divide-y divide-gray-300">
          {books?.map((book) => (
            <tr key={book._id} className="hover:bg-blue-600">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src={book.image}
                      alt={book.title}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-white">
                      {book.title}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-white">
                  ${book.price.toFixed(2)}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-white">{book.category}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  onClick={() => {
                    setSelectedBookId(book._id);
                    openDeleteModal();
                  }}
                  className="text-red-600 hover:text-red-700"
                >
                  <LuTrash className="h-6 w-6" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={isDeleteModalOpen}
        closeModal={closeDeleteModal}
        title="Are you sure you want to remove this book?"
        description="Deleting this book will remove it from your books. Any associated data, other related information will also be deleted. Please make sure this is the intended action."
      >
        <div className="flex items-center space-x-3 mt-4">
          <Button
            className="bg-red-700 hover:bg-red-800 p-2 w-full"
            onClick={() => {
              deleteBook(selectedBookId);
              setSelectedBookId("");
              closeDeleteModal();
            }}
          >
            Yes, remove
          </Button>
          <Button
            className="bg-gray-400 hover:bg-gray-500 p-2 w-full"
            onClick={closeDeleteModal}
          >
            Cancle
          </Button>
        </div>
      </Modal>
    </div>
  );
};
export default BooksList;
