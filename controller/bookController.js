const bookService = require("../service/bookService");

const getBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooks(req.query.minPrice);
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getBook = async (req, res) => {
  try {
    const book = await bookService.getBookById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createBook = async (req, res) => {
  try {
    const newBook = await bookService.createBook(req.body);
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateBook = async (req, res) => {
  try {
    const updatedBook = await bookService.updateBook(req.params.id, req.body);
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteBook = async (req, res) => {
  try {
    const deleted = await bookService.deleteBook(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getBooks, getBook, createBook, updateBook, deleteBook };
