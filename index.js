const express = require("express");
const logger = require("./middleware/logger");
const userRouter = require("./router/userRouter");
const bookRouter = require("./router/bookRouter");

const app = express();

app.use(express.json());
app.use(logger);

app.use("/users", userRouter);
app.use("/books", bookRouter);

app.listen(3002);
