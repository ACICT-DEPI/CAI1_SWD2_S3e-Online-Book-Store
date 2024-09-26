import React from "react";
import img from "./books/hopeless.jpg";
import { FaShoppingCart, FaSearch, FaHeart } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useBookStore } from "./../../store/bookStore";

export default function BookShow() {
  return (
    <div
      className="flex flex-col h-fit cursor-pointer group
    hover:shadow-2xl hover:rounded-lg 
    hover:scale-105 hover:-translate-y-2 
    transition-all duration-300 ease-in-out"
    >
      <div
        className="w-3/4 mx-auto relative hover:rounded-xl 
      hover:shadow-lg hover:-translate-y-2 
      transition-all duration-300 ease-in-out"
      >
        <img
          src={img}
          alt="Hopeless Book Cover"
          className="h-64 rounded-xl object-cover"
        />
        <div
          className="absolute top-3 right-3 bg-white flex 
        flex-col space-y-2 rounded-full
        opacity-0 group-hover:opacity-100 transition-opacity 
        duration-300 ease-in-out"
        ></div>
        <div
          className="absolute bottom-0 w-full px-2 opacity-0 
        translate-y-full group-hover:opacity-100 group-hover:translate-y-0 
        transition-all duration-700 ease-in-out bg-white rounded-b-xl"
        >
          <Link
            to={""}
            className="bg-white text-black px-4 py-2 w-full rounded-b-xl"
          >
            Quick view
          </Link>
        </div>
      </div>

      <div className="py-4 px-2 text-center">
        <p className="text-sm text-gray-500">
          Description goes here, brief book info
        </p>
        <h3 className="text-lg font-semibold">Price: $19.99</h3>
      </div>

      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pb-2 px-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full flex items-center justify-center gap-2">
          <BsCartPlus size={20} className="mx-1" /> Add to Cart
        </button>
      </div>
    </div>
  );
}
