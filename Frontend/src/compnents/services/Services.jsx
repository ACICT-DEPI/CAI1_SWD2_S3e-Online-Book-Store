import { FaTruck, FaGift, FaUndoAlt, FaEnvelope } from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
        <div className="service-item flex flex-col items-center text-center p-6 hover:scale-105 transition-transform">
          <FaTruck size={40} className="text-gray-600 mb-4" />
          <b className="text-lg text-gray-800">Free Shipping</b>
        </div>
        <div className="service-item flex flex-col items-center text-center p-6 hover:scale-105 transition-transform">
          <FaGift size={40} className="text-gray-600 mb-4" />
          <b className="text-lg text-gray-800">Gift Card</b>
        </div>
        <div className="service-item flex flex-col items-center text-center p-6 hover:scale-105 transition-transform">
          <FaUndoAlt size={40} className="text-gray-600 mb-4" />
          <b className="text-lg text-gray-800">7 Days Return</b>
        </div>
        <div className="service-item flex flex-col items-center text-center p-6 hover:scale-105 transition-transform">
          <FaEnvelope size={40} className="text-gray-600 mb-4" />
          <b className="text-lg text-gray-800">Contact Us</b>
        </div>
      </div>
    </div>
  );
};

export default Services;
