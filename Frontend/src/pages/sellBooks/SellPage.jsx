export default function SellPage() {
  return (
    <div>
      <div className="bg-white w-3/4 h-2/3 mx-auto my-8 rounded-md flex flex-col">
        <div className="bg-slate-50 w-full h-24 rounded-t-md flex items-center justify-center">
          <h1 className="text-4xl text-gray-500 font-sans text-center ">
            Sell Book
          </h1>
        </div>
        <div className="flex flex-col w-full">
          <div className="p-3">
            <label className="ml-1">Book Title</label>
            <br />
            <input
              className="mt-1 size-8 border  rounded-sm w-full"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="p-3">
            <label className="ml-1">Book Description</label>
            <br />
            <input
              className="mt-1 size-8 border  rounded-sm w-full"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="p-3">
            <label className="ml-1">Book Author</label>
            <br />
            <input
              className="mt-1 size-8 border  rounded-sm w-full"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="p-3">
            <label className="ml-1">Book category</label>
            <br />
            <input
              className="mt-1 size-8 border  rounded-sm w-full"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
