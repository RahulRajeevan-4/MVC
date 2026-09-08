const { readBooks, writeBooks } = require("../database/bookDB");

const getAllBooks = async (minPrice) => {
  const books = await readBooks();
  if (minPrice) {
    return books.filter((book) => book.price >= Number(minPrice));
  }
  return books;
};

const getBookById = async (id) => {
  const books = await readBooks();
  return books.find((book) => book.id === Number(id));
};

const createBook = async (data) => {
  const books = await readBooks();
  const newBook = {
    id: books.length + 1,
    title: data.title,
    author: data.author,
    price: data.price,
    category: data.category,
    available: data.available,
  };
  books.push(newBook);
  await writeBooks(books);
  return newBook;
};

const updateBook = async (id, data) => {
  const books = await readBooks();
  const index = books.findIndex((book) => book.id === Number(id));
  if (index === -1) return null;
  const updatedBook = { ...books[index], ...data };
  books[index] = updatedBook;
  await writeBooks(books);
  return updatedBook;
};

const deleteBook = async (id) => {
  const books = await readBooks();
  const index = books.findIndex((book) => book.id === Number(id));
  if (index === -1) return false;
  books.splice(index, 1);
  await writeBooks(books);
  return true;
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
