import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";

const Navbar = ({ toggle, setToggle }) => {
  return (
    <nav className="fixed w-full bg-white shadow-lg z-50 p-3">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold flex items-center text-gray-800"
        >
          <span className="text-blue-500">Book</span>
          <i className="bi bi-book text-2xl mx-1 text-yellow-500"></i>
          <span className="text-blue-500">Store</span>
        </Link>

        <ul className="hidden sm:space-x-5 md:flex space-x-20 items-center">
          <li>
            <Link
              to="/"
              onClick={() => setToggle(false)}
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Home
            </Link>
          </li>
         
          <li>
          <Link
            to="/Books"
            onClick={() => setToggle(false)}
            className="text-gray-600 hover:text-blue-500 transition"
          >
            books
          </Link>
        </li>
        <li>
        <Link
          to="/authors"
          onClick={() => setToggle(false)}
          className="text-gray-600 hover:text-blue-500 transition"
        >
          Authors
        </Link>
      </li>
        <li>
        <Link
          to="/sellBook"
          onClick={() => setToggle(false)}
          className="text-gray-600 hover:text-blue-500 transition"
        >
          sell book
        </Link>
      </li>
          <li>
            <Link
              to="/about"
              onClick={() => setToggle(false)}
              className="text-gray-600 hover:text-blue-500 transition"
            >
              About Us
            </Link>
          </li>
       
          <li>
            <Link
              to="/register"
              onClick={() => setToggle(false)}
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="text-gray-600 hover:text-blue-500 transition flex items-center"
            >
              <i className="bi bi-person-fill mr-2"></i> Login
            </Link>
          </li>
        </ul>

        <div className="relative flex items-center">
          <Link
            to="/cart"
            className="relative flex items-center text-gray-600 hover:text-blue-500 transition"
          >
            <BsCart2 size={30} />
          </Link>

          <button
            onClick={() => setToggle(!toggle)}
            className="ml-4 md:hidden text-gray-800 text-3xl focus:outline-none"
          >
            <i className={toggle ? "bi bi-x-lg" : "bi bi-list"}></i>
          </button>
        </div>
      </div>

      <div className={`md:hidden ${toggle ? "block" : "hidden"} bg-white`}>
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li>
            <Link
              to="/"
              onClick={() => setToggle(false)}
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Home
            </Link>
          </li>
          <li>
          <Link
            to="/Books"
            onClick={() => setToggle(false)}
            className="text-gray-600 hover:text-blue-500 transition"
          >
            books
          </Link>
        </li>
        <li>
        <Link
          to="/authors"
          onClick={() => setToggle(false)}
          className="text-gray-600 hover:text-blue-500 transition"
        >
          Authors
        </Link>
      </li>
        <li>
        <Link
          to="/Sell Book"
          onClick={() => setToggle(false)}
          className="text-gray-600 hover:text-blue-500 transition"
        >
          sell book
        </Link>
      </li>
          <li>
            <Link
              to="/about"
              onClick={() => setToggle(false)}
              className="text-gray-600 hover:text-blue-500 transition"
            >
              About Us
            </Link>
          </li>
          
          <li>
            <Link
              to="/about"
              onClick={() => setToggle(false)}
              className="text-gray-600 hover:text-blue-500 transition"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setToggle(false)}
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              onClick={() => setToggle(false)}
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              onClick={() => setToggle(false)}
              className="text-gray-600 hover:text-blue-500 transition flex items-center"
            >
              <i className="bi bi-person-fill mr-2"></i> Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
