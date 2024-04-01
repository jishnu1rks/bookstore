import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

//add a book to the store
router.post("/", async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;

    if (!title || !author || !publishYear) {
      return res.status(400).send({ message: "Missing parameters..." });
    }

    const newBook = {
      title,
      author,
      publishYear,
    };

    let response = await Book.create(newBook);
    res.status(201).send({ data: response });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

//get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).send({ count: books.length, data: books });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

//get a single book by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const books = await Book.findById(id);
    res.status(200).send(books);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

//update a book by id
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, publishYear } = req.body;

    if (!title || !author || !publishYear) {
      return res.status(400).send({ message: "Missing parameters..." });
    }

    const updatedBook = {
      title,
      author,
      publishYear,
    };

    const book = await Book.findByIdAndUpdate(id, updatedBook);

    if (!book) {
      return res
        .status(400)
        .send({ message: "Unable to find the book with the id" });
    }

    res.status(200).send({ message: "Book updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

//delete a book by id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res
        .status(400)
        .send({ message: "Unable to find the book with the id" });
    }
    res.status(200).send({ message: "Book Deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

export default router;
