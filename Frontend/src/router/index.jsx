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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        <Route index element={<HomePage />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="/sellBook" element={<SellPage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);
export default router;
