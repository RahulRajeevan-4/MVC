const express = require("express");
const bookController = require("../controller/bookController");

const router = express.Router();

router.get("/", bookController.getBooks);
router.get("/:id", bookController.getBook);
router.post("/", bookController.createBook);
router.patch("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;
