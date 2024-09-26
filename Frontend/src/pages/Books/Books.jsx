import React from "react";
import BookShow from "../../components/book/BookShow";

export default function BooksPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-3xl font-semibold text-gray-800 mb-8">
          Our Book Collection
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-8">
          <BookShow />
        </div>
      </div>
    </div>
  );
}
