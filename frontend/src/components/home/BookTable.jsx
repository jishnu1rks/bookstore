import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BookTable = ({ books }) => {
  return (
    <table className="border-separate border-spacing-2 w-full">
      <thead>
        <tr>
          <th className="border-slate-700 border rounded-lg ">No.</th>
          <th className="border-slate-700 border rounded-lg ">Title</th>
          <th className="border-slate-700 border rounded-lg max-md:hidden">
            Author
          </th>
          <th className="border-slate-700 border rounded-lg max-md:hidden">
            Published Year
          </th>
          <th className="border-slate-700 border rounded-lg ">Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.length > 0 ? (
          books?.map((book, i) => (
            <tr key={book._id} className="text-center">
              <td className="border-slate-700 border rounded-lg">{i + 1}</td>
              <td className="border-slate-700 border rounded-lg">
                {book.title}
              </td>
              <td className="border-slate-700 border rounded-lg max-md:hidden">
                {book.author}
              </td>
              <td className="border-slate-700 border rounded-lg max-md:hidden">
                {book.publishYear}
              </td>
              <td className="border-slate-700 flex border rounded-lg justify-center gap-2">
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className="h-6 w-6 text-blue-400" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className="h-6 w-6 text-yellow-400" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className="h-6 w-6 text-red-400" />
                </Link>
              </td>
            </tr>
          ))
        ) : (
          <tr></tr>
        )}
      </tbody>
    </table>
  );
};

export default BookTable;
