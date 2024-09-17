import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Header from "./components/header/Header";
import BookPage from "./components/book/BookPage";
import Footer from "./components/footer/Footer";
import SellPage from "./pages/sellBooks/SellPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="/sellBook" element={<SellPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
