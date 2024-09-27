import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { parseingDate } from "../utils";

const ProfilePage = () => {
  const { user } = useAuthStore();
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Profile Sidebar */}
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
            <Link
              to={"/setting"}
              className="bg-white text-blue-600 font-semibold mt-6 py-2 px-6 rounded-full shadow hover:bg-blue-50 transition duration-200"
            >
              Edit Profile
            </Link>
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
                <li className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
                  <div>
                    <p className="font-medium">Dune by Frank Herbert</p>
                    <div className="text-yellow-400 mt-1 flex">
                      <span>★★★★★</span>
                      <span className="ml-1 text-gray-500">4.8</span>
                    </div>
                  </div>
                  <a href="#" className="text-blue-600 hover:underline">
                    View Book
                  </a>
                </li>
                <li className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
                  <div>
                    <p className="font-medium">Atomic Habits by James Clear</p>
                    <div className="text-yellow-400 mt-1 flex">
                      <span>★★★★☆</span>
                      <span className="ml-1 text-gray-500">4.5</span>
                    </div>
                  </div>
                  <a href="#" className="text-blue-600 hover:underline">
                    View Book
                  </a>
                </li>
              </ul>
            </section>
            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800">
                Order History
              </h3>
              <ul className="mt-4 space-y-4">
                <li className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
                  <div>
                    <p className="font-medium">Order #12345</p>
                    <p className="text-gray-500 text-sm">
                      Delivered on March 12, 2024
                    </p>
                  </div>
                  <a href="#" className="text-blue-600 hover:underline">
                    View Details
                  </a>
                </li>
                <li className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
                  <div>
                    <p className="font-medium">Order #12344</p>
                    <p className="text-gray-500 text-sm">
                      Delivered on February 28, 2024
                    </p>
                  </div>
                  <a href="#" className="text-blue-600 hover:underline">
                    View Details
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
