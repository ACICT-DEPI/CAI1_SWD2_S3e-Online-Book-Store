import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { parseingDate } from "../utils";
import { useBookStore } from "../store/bookStore";
import { useEffect } from "react";
import Rating from "../components/book-slider/Rating";

const ProfilePage = () => {
  const { user } = useAuthStore();
  const { getWishList, wishList, getUserOrders, userOrders } = useBookStore();

  useEffect(() => {
    getWishList();
    getUserOrders();
  }, [getUserOrders, getWishList]);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-8 text-center flex flex-col items-center">
            <img
              className="rounded-full h-32 w-32 object-cover border-4 border-white shadow-md"
              src="avatar.png"
              alt="Profile"
            />
            <h2 className="mt-4 text-white text-2xl font-bold">{user.name}</h2>
            <p className="text-blue-200 text-sm mt-1">
              Avid Reader & Book Enthusiast
            </p>
            {/* <Link
              to={"/setting"}
              className="bg-white text-blue-600 font-semibold mt-6 py-2 px-6 rounded-full shadow hover:bg-blue-50 transition duration-200"
            >
              Edit Profile
            </Link> */}
          </div>
          <div className="col-span-2 p-8">
            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800">
                Personal Information
              </h3>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-600">Email</p>
                  <p className="text-gray-800">{user.email}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-600">Favorite Genre</p>
                  <p className="text-gray-800">Science Fiction</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-600">Joined</p>
                  <p className="text-gray-800">
                    {parseingDate(user.createdAt)}
                  </p>
                </div>
              </div>
            </section>
            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800">Wishlist</h3>
              <ul className="mt-4 space-y-4">
                {wishList.map((book) => (
                  <li
                    key={book._id}
                    className="bg-gray-100 p-4 rounded-lg flex justify-between items-center"
                  >
                    <div>
                      <p className="font-medium mb-1">{book.title}</p>
                      <Rating rating={book.rating} />
                    </div>
                    <Link
                      to={`/book/${book._id}`}
                      className="text-blue-600 hover:underline"
                    >
                      View Book
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800">
                Order History
              </h3>
              <ul className="mt-4 space-y-4">
                {userOrders.map((order) => (
                  <li
                    key={order._id}
                    className="bg-gray-100 p-4 rounded-lg flex justify-between items-center"
                  >
                    <div>
                      <p className="font-medium">Order #{order._id}</p>
                      <p className="text-gray-500 text-sm">
                        Delivered on {parseingDate(order.createdAt)}
                      </p>
                    </div>
                    <Link
                      to={`/order/${order._id}`}
                      className="text-blue-600 hover:underline"
                    >
                      View Details
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
