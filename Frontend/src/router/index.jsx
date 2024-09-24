import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import HomePage from "../pages/home/HomePage";
import BookPage from "../components/book/BookPage";
import SellPage from "../pages/sellBooks/SellPage";
import RootLayout from "./../pages/Layout";
import ErrorHandler from "./../components/errors/ErrorHandler";
import PageNotFound from "./../pages/PageNotFound";
import RegisterPage from "../pages/Registerpage";
import LoginPage from "../pages/LoginPage";
import CartPage from "../pages/cart/Cart";
import BooksPage from "../pages/Books/Books";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        <Route index element={<HomePage />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="/sellBook" element={<SellPage />} />
        <Route path="/Books" element={<BooksPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);
export default router;
