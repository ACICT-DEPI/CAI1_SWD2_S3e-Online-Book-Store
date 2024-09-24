import BookShow from "../../components/book/BookShow";

export default function BooksPage() {
  return (
    <div className="flex w-{3/4} min-h-screen mx-auto bg-slate-100 py-20 ">
      <div className="w-1/4 flex flex-col items-center bg-slate-100 ">
        <h3>catgory</h3>
      </div>
      <div className="flex w-3/4 flex-wrap gap-1">
        <BookShow />
        <BookShow />
        <BookShow />
        <BookShow />
        <BookShow />
        <BookShow />
        <BookShow />
        <BookShow />
        <BookShow />
        <BookShow />
        <BookShow />
        <BookShow />
      </div>
    </div>
  );
}
