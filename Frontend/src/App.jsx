import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Header from "./compnents/header/Header";
import BookPage from "./compnents/book/BookPage";
import Footer from "./compnents/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:id" element={<BookPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
