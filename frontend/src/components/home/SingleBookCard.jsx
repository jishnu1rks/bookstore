import React from "react";
import { Link } from "react-router-dom";
import { MdPersonOutline } from "react-icons/md";
import { BsBook } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineTimer } from "react-icons/md";

const SingleBookCard = ({ book }) => {
  return (
    <div className="border border-slate-500 hover:shadow-slate-500 hover:shadow-2xl min-w-full h-fit p-10 rounded-xl">
      <div className="mb-2 flex items-start gap-4">
        <BsBook className="text-xl mt-2 text-orange-900" />
        <h2 className="text-orange-900 text-xl ">{book.title}</h2>
      </div>
      <div className="mb-2 flex item-end gap-4">
        <MdPersonOutline className="text-2xl text-gray-700" />
        <h6 className="text-md text-gray-700">{book.author}</h6>
      </div>
      <div className="mb-2 flex item-end gap-4">
        <MdOutlineTimer className="text-2xl text-gray-700" />
        <h6 className="text-md text-gray-700">{book.publishYear}</h6>
      </div>
      <div className="flex justify-start gap-4 mt-5 items-center">
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="h-6 w-6 text-blue-400 hover:text-black" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="h-6 w-6 text-yellow-400 hover:text-black" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="h-6 w-6 text-red-400 hover:text-black" />
        </Link>
      </div>
    </div>
  );
};

export default SingleBookCard;
