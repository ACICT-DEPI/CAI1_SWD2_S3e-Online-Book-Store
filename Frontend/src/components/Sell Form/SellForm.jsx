import { useState } from "react";

const SellForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
    price: "",
    image: null,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    let valid = true;

    if (!formData.title) {
      tempErrors.title = "Please enter the book title.";
      valid = false;
    }

    if (!formData.description) {
      tempErrors.description = "Please enter the book description.";
      valid = false;
    }

    if (!formData.author) {
      tempErrors.author = "Please enter the author's name.";
      valid = false;
    }

    if (!formData.price || formData.price <= 0) {
      tempErrors.price = "Book price must be greater than zero.";
      valid = false;
    }

    if (!formData.image) {
      tempErrors.image = "Please upload a book image.";
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      console.log("Form submitted successfully", formData);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when input changes
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
    setErrors({ ...errors, image: "" }); // Clear error when input changes
  };

  return (
    <form className="bg-white w-3/4 h-2/3 mx-auto my-20 rounded-md flex flex-col" onSubmit={handleSubmit}>
      <div className="bg-slate-50 w-full h-24 rounded-t-md flex items-center justify-center">
        <h1 className="text-4xl text-gray-500 font-sans text-center">Sell Book</h1>
      </div>

      {/* Book Title */}
      <div className="flex flex-col w-full p-3">
        <label className="ml-1">Book Title</label>
        <input
          name="title"
          className={`mt-1 size-8 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-sm w-full`}
          type="text"
          value={formData.title}
          onChange={handleInputChange}
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      {/* Book Description */}
      <div className="flex flex-col w-full p-3">
        <label className="ml-1">Book Description</label>
        <input
          name="description"
          className={`mt-1 size-8 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-sm w-full`}
          type="text"
          value={formData.description}
          onChange={handleInputChange}
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
      </div>

      {/* Book Author */}
      <div className="flex flex-col w-full p-3">
        <label className="ml-1">Book Author</label>
        <input
          name="author"
          className={`mt-1 size-8 border ${errors.author ? 'border-red-500' : 'border-gray-300'} rounded-sm w-full`}
          type="text"
          value={formData.author}
          onChange={handleInputChange}
        />
        {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author}</p>}
      </div>

      {/* Book Price */}
      <div className="flex flex-col w-full p-3">
        <label className="ml-1">Book Price</label>
        <input
          name="price"
          className={`mt-1 size-8 border ${errors.price ? 'border-red-500' : 'border-gray-300'} rounded-sm w-full`}
          type="text"
          value={formData.price}
          onChange={handleInputChange}
        />
        {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
      </div>

      {/* Book Image */}
      <div className="flex flex-col w-full p-3">
        <label className="ml-1">Book Image</label>
        <input
          className={`mt-1 size-8 border ${errors.image ? 'border-red-500' : 'border-gray-300'} rounded-sm w-full`}
          type="file"
          onChange={handleImageChange}
        />
        {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
      </div>

      {/* Submit Button */}
      <div className="w-full flex justify-center py-1">
        <button
          className="bg-blue-600 text-white px-5 py-2 rounded-lg text-lg font-bold cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-500 hover:border-2 hover:border-blue-600"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SellForm;
