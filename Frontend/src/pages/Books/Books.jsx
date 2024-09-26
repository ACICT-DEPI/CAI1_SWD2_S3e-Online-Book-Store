import React from "react";
import BookShow from "../../components/book/BookShow";

export default function BooksPage() {
  return (
    <div className="flex flex-col w-full min-h-screen mx-auto bg-slate-100 py-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-3/4 mx-auto">
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
