import { Link, NavLink } from "react-router-dom";
import { useCartStore } from './../../store/cartStore';
import {
  BsBook,
  BsCart2,
  BsFillPersonFill,
  BsXLg,
  BsList,
} from "react-icons/bs";

const Navbar = ({ toggle, setToggle }) => {
  const{cart}=useCartStore();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 p-3">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold flex items-center text-gray-800"
        >
          <span className="text-blue-500">Book</span>
          <BsBook className="text-2xl mx-1 text-yellow-500" />
          <span className="text-blue-500">Store</span>
        </Link>

        <ul className="hidden sm:space-x-5 md:flex space-x-20 items-center">
          <li>
            <NavLink
              to="/"
              onClick={() => setToggle(false)}
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Books"
              onClick={() => setToggle(false)}
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/authors"
              onClick={() => setToggle(false)}
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Authors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sellBook"
              onClick={() => setToggle(false)}
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Sell Book
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setToggle(false)}
              className="text-gray-600 hover:text-blue-500 transition"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              onClick={() => setToggle(false)}
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              onClick={() => setToggle(false)}
              className="text-gray-600 hover:text-blue-500 transition flex items-center"
            >
              <BsFillPersonFill className="mr-2" /> Login
            </NavLink>
          </li>
        </ul>

        <div className="relative flex items-center">
          <NavLink
            to="/cart"
            className="relative flex items-center text-gray-600 hover:text-blue-500 transition"
          >
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {cart.length}
              </span>
            )}
            <BsCart2 size={30} />
          </NavLink>

          <button
            onClick={() => setToggle(!toggle)}
            className="ml-4 md:hidden text-gray-800 text-3xl focus:outline-none"
          >
            {toggle ? <BsXLg /> : <BsList />}
          </button>
        </div>
      </div>

      <div className={`md:hidden ${toggle ? "block" : "hidden"} bg-white`}>
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li>
            <NavLink
              to="/"
              onClick={() => setToggle(false)}
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Books"
              onClick={() => setToggle(false)}
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/authors"
              onClick={() => setToggle(false)}
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Authors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sellBook"
              onClick={() => setToggle(false)}
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Sell Book
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setToggle(false)}
              className="text-gray-600 hover:text-blue-500 transition"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              onClick={() => setToggle(false)}
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              onClick={() => setToggle(false)}
              className="text-gray-600 hover:text-blue-500 transition flex items-center"
            >
              <BsFillPersonFill className="mr-2" /> Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
