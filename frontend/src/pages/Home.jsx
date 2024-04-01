import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import BookCard from "../components/home/BookCard";
import BookTable from "../components/home/BookTable";
import { MdOutlineAddBox } from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    async function getBooks() {
      const res = await axios.get("http://localhost:3000/books");
      setBooks(res.data.data);
      setLoading(false);
    }
    getBooks();
  }, []);

  return (
    <div className="w-full h-screen max-w-[80vw] mx-auto my-5">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl text-gray-900">Books List</h2>
        <Link to="/books/create">
          <MdOutlineAddBox className="h-12 w-12 text-green-700" />
        </Link>
      </div>
      <div className="flex justify-center gap-5">
        <button
          className="bg-sky-700 text-white px-5 py-2 rounded-md hover:bg-sky-900"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-700 text-white px-5 py-2 rounded-md hover:bg-sky-900"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <div className="flex items-center w-[800px] min-w-full my-5">
        {loading ? (
          <Spinner />
        ) : showType == "table" ? (
          <BookTable books={books} />
        ) : (
          <BookCard books={books} />
        )}
      </div>
    </div>
  );
};

export default Home;
