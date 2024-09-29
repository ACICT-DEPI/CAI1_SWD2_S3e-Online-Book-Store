import  { useEffect } from "react";
import BookShow from "../../components/book/BookShow";
import SearchComponent from "../../components/serch/SearchComponent";
import { useBookStore } from "../../store/bookStore";

export default function BooksPage() {
  const { books, getAllBooks } = useBookStore();

  useEffect(() => {
    getAllBooks();
  }, [getAllBooks]);

  return (
    <div className="mt- pt-0">
      <SearchComponent books={books} className=" " />
      <div className="flex flex-col w-full min-h-screen bg-slate-100 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-3xl font-semibold text-gray-800 ">
            Our Book Collection
          </h1>

          <div className="flex w-3/4 min-h-screen mx-auto bg-slate-100 py-10 items-center ">
            <div className="flex flex-wrap gap-1">
              <BookShow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
