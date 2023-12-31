import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS books (
    book TEXT,
    author TEXT
  )
`);

db.exec(`
    INSERT INTO books (book, author)
    VALUES
    ('To Kill a Mockingbird', 'Harper Lee'),
    ('Pride and Prejudice', 'Jane Austen'),
    ('The Catcher in the Rye', 'J.D. Salinger'),
    ('One Flew Over the Cuckoos Nest', 'Ken Kesey'),
    ('The Great Gatsby', 'F. Scott Fitzgerald')
`);