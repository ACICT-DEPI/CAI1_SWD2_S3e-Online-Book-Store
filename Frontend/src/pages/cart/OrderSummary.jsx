const OrderSummary = ({ totalPrice }) => {
  return (
    <div className="w-full max-w-sm border border-gray-300 p-5 bg-white rounded-lg shadow-md mt-20">
      <h3 className="text-2xl font-semibold mb-5 text-gray-800">Order Total</h3>
      <div className="flex justify-between text-lg mb-4">
        <span>Subtotal:</span>
        <span>${totalPrice}</span>
      </div>
      <div className=" flex justify-between text-lg mb-4">
        <span>Pickup:</span>
        <span className=" text-blue-500 ">Building 15, El Rehab City</span>
      </div>
  

      <hr className="border-gray-300 my-4" />

      <div className="flex justify-between font-bold text-lg text-gray-800">
        <span>Total</span>
        <span>${totalPrice}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
