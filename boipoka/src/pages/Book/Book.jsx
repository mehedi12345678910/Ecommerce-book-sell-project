import React from "react";
import { CiStar } from "react-icons/ci"; // Star icon er jonno react-icons use kora hoyeche
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const { bookName, author, image, category, rating, tags, bookId } =
    singleBook;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 border border-gray-200 p-6 rounded-2xl hover:border-primary transition-all duration-300 cursor-pointer group">
        <figure className="bg-[#F3F3F3] rounded-2xl py-8 flex justify-center items-center overflow-hidden">
          <img
            className="h-[166px] w-auto object-contain transform group-hover:scale-110 transition-transform duration-500"
            src={image}
            alt={bookName}
          />
        </figure>

        <div className="mt-6 space-y-4">
          <div className="flex gap-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#23BE0A10] text-[#23BE0A] px-4 py-1 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#131313] mb-2 line-clamp-1">
              {bookName}
            </h2>
            <p className="text-[#131313CC] font-medium text-base">
              By : {author}
            </p>
          </div>

          <div className="border-t border-dashed border-gray-300 my-4"></div>

          <div className="flex justify-between items-center text-[#131313CC] font-medium">
            <span>{category}</span>
            <div className="flex items-center gap-2">
              <span>{rating}</span>
              <CiStar className="text-xl text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
