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
import NotFoundPage from "./../pages/NotFoundPage";
import RegisterPage from "../pages/Registerpage";
import LoginPage from "../pages/LoginPage";
import CartPage from "../pages/cart/Cart";
import Authors from "./../pages/authors/Authors";
import ForgotPasswordPage from "./../pages/ForgotPasswordPage";
import ResetPasswordPage from "./../pages/ResetPasswordPage";
import EmailVerificationPage from "./../pages/EmailVerificationPage";

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
        <Route path="/authors" element={<Authors />} />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);
export default router;
