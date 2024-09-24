import { useState } from "react";
import { LuLoader, LuPlusCircle, LuUpload } from "react-icons/lu";
import { useBookStore } from "../store/bookStore";
import { useAuthStore } from "../store/authStore";
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";

const categories = ["Action"];

const CreateBookForm = () => {
  const { user } = useAuthStore();

  const [newBook, setNewBook] = useState({
    title: "",
    description: "",
    price: "",
    printLength: "",
    category: "",
    language: "",
    PublicationDate: "",
    authorId: user._id,
    authorName: user.name,
    image: "",
  });

  const { addBook, loading } = useBookStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addBook(newBook);
      setNewBook({
        title: "",
        description: "",
        price: "",
        printLength: "",
        category: "",
        language: "",
        PublicationDate: "",
        author: user._id,
        image: "",
      });
    } catch {
      console.log("error creating a product");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setNewBook({ ...newBook, image: reader.result });
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className="mt-[100px] mx-auto max-w-lg w-full bg-gray-300 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl 
			overflow-hidden m-5"
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-blue-500 text-transparent bg-clip-text">
          Add New Book
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Title"
              value={newBook.title}
              onChange={(e) =>
                setNewBook({ ...newBook, title: e.target.value })
              }
            />
          </div>

          <div>
            <Textarea
              placeholder="Description"
              value={newBook.description}
              onChange={(e) =>
                setNewBook({ ...newBook, description: e.target.value })
              }
            />
          </div>

          <div>
            <Input
              type="number"
              placeholder="Price"
              min="0"
              step="0.01"
              value={newBook.price}
              onChange={(e) =>
                setNewBook({ ...newBook, price: e.target.value })
              }
            />
          </div>

          <div>
            <Input
              type="number"
              placeholder="Print Length"
              min="50"
              step="1"
              value={newBook.printLength}
              onChange={(e) =>
                setNewBook({ ...newBook, printLength: e.target.value })
              }
            />
          </div>

          <div>
            <Input
              type="text"
              placeholder="Language"
              value={newBook.language}
              onChange={(e) =>
                setNewBook({ ...newBook, language: e.target.value })
              }
            />
          </div>

          <div>
            <Input
              type="date"
              placeholder="Publication Date"
              value={newBook.PublicationDate}
              onChange={(e) =>
                setNewBook({ ...newBook, PublicationDate: e.target.value })
              }
            />
          </div>

          <div>
            <select
              id="category"
              name="category"
              value={newBook.category}
              onChange={(e) =>
                setNewBook({ ...newBook, category: e.target.value })
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
            {newBook.image && (
              <span className="ml-3 text-blue-500">Image uploaded </span>
            )}
          </div>

          <button
            type="submit"
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
              <>
                <LuPlusCircle className="mr-2 h-5 w-5" />
                Add Book
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
export default CreateBookForm;
