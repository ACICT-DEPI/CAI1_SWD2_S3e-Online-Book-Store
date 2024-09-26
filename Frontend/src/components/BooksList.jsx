import { useBookStore } from "../store/bookStore";
import { LuLoader, LuTrash, LuUpload } from "react-icons/lu";
import { FaEdit } from "react-icons/fa";
import Button from "./ui/Button";
import Modal from "./ui/Modal";
import { useEffect, useState } from "react";
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";

const categories = ["Action"];

const BooksList = () => {
  const { authorBooks, editBook, deleteBook, loading, getAuthorBooks } =
    useBookStore();

  const [newImage, setNewImage] = useState(false);
  const [selectedBook, setSelectedBook] = useState({});
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const closeEditModal = () => setIsEditOpen(false);
  const openEditModal = () => setIsEditOpen(true);
  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  useEffect(() => {
    getAuthorBooks();
  }, [getAuthorBooks]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editBook(selectedBook._id, selectedBook);
      setSelectedBook({
        title: "",
        description: "",
        price: "",
        printLength: "",
        category: "",
        language: "",
        PublicationDate: "",
        image: null,
      });
      closeEditModal();
    } catch {
      console.log("error creating a product");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedBook({ ...selectedBook, image: reader.result });
        setNewImage(true);
      };

      reader.readAsDataURL(file);
    }
  };

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
          {authorBooks?.map((book) => (
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
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-5">
                <button
                  onClick={() => {
                    setSelectedBook({ ...book, image: null });
                    openEditModal();
                  }}
                  className="text-white hover:text-blue-200"
                >
                  <FaEdit className="h-6 w-6" />
                </button>
                <button
                  onClick={() => {
                    setSelectedBook(book);
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
        isOpen={isEditOpen}
        closeModal={closeEditModal}
        title={"Edit Book"}
        className="bg-blue-500"
      >
        <div className="space-x-3 mt-4">
          <form className="space-y-2">
            <div>
              <Input
                type="text"
                placeholder="Title"
                value={selectedBook.title}
                onChange={(e) =>
                  setSelectedBook({ ...selectedBook, title: e.target.value })
                }
              />
            </div>

            <div>
              <Textarea
                placeholder="Description"
                value={selectedBook.description}
                onChange={(e) =>
                  setSelectedBook({
                    ...selectedBook,
                    description: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <Input
                type="number"
                placeholder="Price"
                min="0"
                step="0.01"
                value={selectedBook.price}
                onChange={(e) =>
                  setSelectedBook({ ...selectedBook, price: e.target.value })
                }
              />
            </div>

            <div>
              <Input
                type="number"
                placeholder="Print Length"
                min="50"
                step="1"
                value={selectedBook.printLength}
                onChange={(e) =>
                  setSelectedBook({
                    ...selectedBook,
                    printLength: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <Input
                type="text"
                placeholder="Language"
                value={selectedBook.language}
                onChange={(e) =>
                  setSelectedBook({ ...selectedBook, language: e.target.value })
                }
              />
            </div>

            <div>
              <Input
                type="date"
                placeholder="Publication Date"
                value={selectedBook.PublicationDate}
                onChange={(e) =>
                  setSelectedBook({
                    ...selectedBook,
                    PublicationDate: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <select
                id="category"
                name="category"
                value={selectedBook.category}
                onChange={(e) =>
                  setSelectedBook({ ...selectedBook, category: e.target.value })
                }
                className="mb-3 block w-full bg-gray-200 border border-gray-300 rounded-md
						shadow-sm py-2 px-3 text-gray-800 focus:outline-none 
						focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center">
              <input
                type="file"
                id="image"
                className="sr-only"
                accept="image/*"
                onChange={handleImageChange}
              />
              <label
                htmlFor="image"
                className="cursor-pointer bg-gray-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-800 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:border-blue-500 focus:ring-blue-500"
              >
                <LuUpload className="h-5 w-5 inline-block mr-2 text-gray-800" />
                Upload Image
              </label>
              {newImage && (
                <span className="ml-3 text-blue-500">Image uploaded </span>
              )}
            </div>
            <div className="flex items-center space-x-3">
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md 
					shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 
					focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <LuLoader
                      className="mr-2 h-5 w-5 animate-spin"
                      aria-hidden="true"
                    />
                    Loading...
                  </>
                ) : (
                  <>Edit Book</>
                )}
              </button>
              <Button
                type="button"
                onClick={closeEditModal}
                className="bg-gray-400 hover:bg-gray-500 p-2 w-full"
              >
                Cansel
              </Button>
            </div>
          </form>
        </div>
      </Modal>
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
              deleteBook(selectedBook._id);
              setSelectedBook({});
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
