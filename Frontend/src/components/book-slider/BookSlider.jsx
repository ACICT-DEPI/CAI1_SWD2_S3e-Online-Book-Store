import { useState } from "react";
import { FaEye, FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { BsCartPlus } from "react-icons/bs";
import Modal from "../modal/modal";
import "./book-slider.css";
import Rating from "./Rating";

const BookSlider = ({ data }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [bookData, setBookData] = useState(null);

  // Handle Click
  const handleClick = (direction) => {
    if (direction === "left" && slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    } else if (direction === "right" && slideIndex < data.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
  };

  // Handle Modal
  const handleOpenModal = (item) => {
    setOpenModal(true);
    setBookData(item);
  };

  return (
    <div className="book-slider-container">
      {slideIndex > 0 && (
        <FaCircleArrowLeft
          size={30}
          color="black"
          onClick={() => handleClick("left")}
          className="book-slider-arrow-left"
        />
      )}
      <div
        style={{ transform: `translateX(${slideIndex * -340}px)` }}
        className="book-slider-wrapper"
      >
        {data.map((item) => (
          <div key={item.id} className="book-slide-item">
            <img
              src={`/books/${item.image}`}
              alt={item.title}
              className="book-slide-item-img"
            />
            <h3 className="book-slide-item-title">{item.title}</h3>
            <Rating rating={item.rating} reviews={item.reviews} />
            <div className="book-slider-item-price">${item.price}</div>
            <div className="book-slider-icons-wrapper flex text-center justify-center gap-4 cursor-pointer">
              <FaEye
                size={20}
                color="black"
                onClick={() => handleOpenModal(item)}
                className="book-slider-icon"
              />
              <BsCartPlus
                size={20}
                color="black"
                className="book-slider-icon flex"
              />
            </div>
          </div>
        ))}
      </div>
      {slideIndex < data.length - 1 && (
        <FaCircleArrowRight
          size={30}
          color="black"
          onClick={() => handleClick("right")}
          className="book-slider-arrow-right"
        />
      )}
      {openModal && <Modal bookData={bookData} setOpenModal={setOpenModal} />}
    </div>
  );
};

export default BookSlider;
