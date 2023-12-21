import Database from "better-sqlite3";
const db = new Database("database.db");

import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

app.get("/jokes", function (request, response) {
    const jokes = db.prepare("SELECT * FROM jokes").all();
    response.json(jokes);
});

app.post("/jokes", function (request, response) {
    console.log(request.body);
    const setup = request.body.setup;
    const punchline = request.body.punchline;

    const newJoke = db
    .prepare(`INSERT INTO jokes (setup, punchline) VALUES (?, ?)`)
    .run(setup, punchline);

    response.json(newJoke);
});

app.listen(5173, function () {
    console.log("IT'S WORKING!");
  });