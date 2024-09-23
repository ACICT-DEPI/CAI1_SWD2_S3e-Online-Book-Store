import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../config/axios";

export const useBookStore = create((set) => ({
  books: [],
  loading: false,

  getAllBooks: async () => {
    set({ loading: true });
    try {
      const response = await axios.get("/books");
      set({ books: response.data.books, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch books", loading: false });
      toast.error(error.response.data.error || "Failed to fetch books");
    }
  },

  addBook: async (bookData) => {
    set({ loading: true });
    try {
      const res = await axios.post("/books", bookData);
      set((prevState) => ({
        books: [...prevState.books, res.data.book],
        loading: false,
      }));
    } catch (error) {
      toast.error(error.message);
      set({ loading: false });
    }
  },

  deleteBook: async (bookId) => {
    set({ loading: true });
    try {
      await axios.delete(`/books/${bookId}`);
      set((prevBooks) => ({
        books: prevBooks.books.filter((book) => book._id !== bookId),
        loading: false,
      }));
    } catch (error) {
      set({ loading: false });
      toast.error(error.response.data.error || "Failed to delete product");
    }
  },
}));
