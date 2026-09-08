const fs = require("fs");
const path = require("path");

const pathToFile = path.join(__dirname, "..", "users.json");

const readUsers = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(pathToFile, "utf-8", (err, data) => {
      if (err) return reject(err);
      resolve(JSON.parse(data));
    });
  });
};

const writeUsers = (users) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(pathToFile, JSON.stringify(users, null, 2), (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
};

module.exports = { readUsers, writeUsers };
