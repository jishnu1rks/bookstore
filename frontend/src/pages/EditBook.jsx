import React, { useEffect, useReducer } from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const EditBook = () => {
  const [book, updateBook] = useReducer(
    (prev, next) => {
      return { ...prev, ...next };
    },
    { title: "", author: "", publishYear: 2024, loading: false }
  );

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    updateBook({ loading: true });
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((res) => {
        updateBook({
          title: res.data.title,
          author: res.data.author,
          publishYear: res.data.publishYear,
        });
        updateBook({ loading: false });
      })
      .catch((err) => {
        console.log(err);
        updateBook({ loading: false });
      });
  }, []);

  const addBook = async (e) => {
    updateBook({ loading: true });
    e.preventDefault();
    await axios
      .put(`http://localhost:3000/books/${id}`, book)
      .then((res) => {
        updateBook({ loading: false });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong!");
      });
    updateBook({ title: "", author: "", publishYear: 2024 });
  };
  return (
    <div className="w-full h-screen max-w-[80vw] mx-auto my-5">
      <BackButton />
      <h1 className="text-3xl my-4">Update Book</h1>
      {book.loading ? (
        <Spinner />
      ) : (
        <form className="flex flex-col items-center w-[500px] m-auto">
          <label className="my-4 w-full">
            Title
            <input
              type="text"
              placeholder="Enter the title of the book"
              value={book.title}
              className="border-2 rounded-md mt-2 p-2 block w-full"
              onChange={(e) => updateBook({ title: e.target.value })}
            />
          </label>
          <label className="my-2 w-full">
            Author
            <input
              type="text"
              placeholder="Enter the title of the book"
              value={book.author}
              className="border-2 rounded-md mt-2 p-2 block w-full"
              onChange={(e) => updateBook({ author: e.target.value })}
            />
          </label>
          <label className="my-4 w-full">
            Published year
            <input
              type="number"
              placeholder="Enter the title of the book"
              value={book.publishYear}
              className="border-2 rounded-md mt-2 p-2 block w-full"
              onChange={(e) => updateBook({ publishYear: e.target.value })}
            />
          </label>
          <button
            className="bg-orange-500 text-white px-10 py-3 w-fit rounded-md"
            onClick={addBook}
          >
            Update Book
          </button>
        </form>
      )}
    </div>
  );
};

export default EditBook;
