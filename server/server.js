import Database from "better-sqlite3";
const db = new Database("database.db");

import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", function (request, response) {
    const books = db.prepare("SELECT * FROM books").all();
    response.json(books);
});

app.post("/books", function (request, response) {
    console.log(request.body);
    const book = request.body.book;
    const author = request.body.author;

    const newBook = db
    .prepare(`INSERT INTO books (book, author) VALUES (?, ?)`)
    .run(book, author);

    response.json(newBook);
});

app.listen(5174, function () {
    console.log("IT'S WORKING!");
  });