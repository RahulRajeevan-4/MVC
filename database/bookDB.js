const fs = require("fs");
const path = require("path");

const pathToFile = path.join(__dirname, "..", "books.json");

const readBooks = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(pathToFile, "utf-8", (err, data) => {
      if (err) return reject(err);
      resolve(JSON.parse(data));
    });
  });
};

const writeBooks = (books) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(pathToFile, JSON.stringify(books, null, 2), (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
};

module.exports = { readBooks, writeBooks };
