/* eslint-disable react/no-unescaped-entities */
import {  useContext,useState } from "react";
import { authors } from "../../data/authors";
import { books } from "../../data/books"; 
import "./authors.css";
import { BsCartPlus } from "react-icons/bs";

import CartContext from "../../context/cartContext";

const Authors = () => {
  const [search, setSearch] = useState("");
  const {addToCart} = useContext(CartContext);

  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [showPopup, setShowPopup] = useState(false); 

  const handleAuthorClick = (authorName) => {
    setSelectedAuthor(authorName); 
    setShowPopup(true); 
  };

  const handleClosePopup = () => {
    setShowPopup(false); 
    setSelectedAuthor(null); 
  };

  const authorBooks = books.filter((book) => book.author === selectedAuthor);

  return (
    <section className="authors">
      <div className="author-search-wrapper">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="search in authors"
        />
      </div>

      <div className="authors-wrapper">
        {authors
          .filter((a) => a.name.toLowerCase().includes(search.toLowerCase()))
          .map((author) => (
            <div
              className="author"
              key={author.id}
              onClick={() => handleAuthorClick(author.name)}
            >
              <img
                src={author.image}
                alt={author.name}
                className="author-img"
              />
              <h2 className="author-name">{author.name}</h2>
            </div>
          ))}
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-popup" onClick={handleClosePopup}>
              ×
            </span>
            <h2>{selectedAuthor}'s Books</h2>
            <div className="book-list">
              {authorBooks.length > 0 ? (
                authorBooks.map((book) => (
                  <div key={book.id} className="book-item">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="book-img"
                    />
                    <h3>{book.title}</h3>
                    <BsCartPlus
                      onClick={() => addToCart({ ...book, quantity: 1 })}
                    />
                  </div>
                ))
              ) : (
                <p>No books found for this author</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Authors;
