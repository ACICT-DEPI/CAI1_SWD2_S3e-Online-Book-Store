
import Slider from "../../components/slider/Slider";
import SellForm from "../../components/Sell Form/SellForm";
export default function SellPage() {
  return (
    <div>
      <Slider />
      <div className="w-3/4 mx-auto my-5 text-gray-600 text-center">
        <p>
          To sell your book, please fill in the following form with all the
          required details. Make sure to upload a clear image of the book and
          provide a valid price.
        </p>
      </div>
      <SellForm/>
    </div>
  );
}
