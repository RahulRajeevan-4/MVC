const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

// logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(express.json());
const pathToFile = path.join(__dirname, "users.json");
const pathToFile2 = path.join(__dirname, "books.json");

// get all users or filtered
app.get("/users", (req, res) => {
  fs.readFile(pathToFile, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
    // handles both /users and /users?minAge=20
    const users = JSON.parse(data);
    if (req.query.minAge) {
      const minAge = Number(req.query.minAge);
      const filteredUsers = users.filter((user) => user.age >= minAge);
      return res.status(200).json(filteredUsers);
    }
    res.status(200).json(users);
  });
});

app.listen(3002);
