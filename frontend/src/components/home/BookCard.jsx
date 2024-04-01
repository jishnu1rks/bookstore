import React from "react";
import SingleBookCard from "./SingleBookCard";

const BookCard = ({ books }) => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-3 gap-5 w-full">
      {books.map((book) => (
        <SingleBookCard book={book} key={book._id} />
      ))}
    </div>
  );
};

export default BookCard;
