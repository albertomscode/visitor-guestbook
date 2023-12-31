const form = document.getElementById("bookForm");

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  // get the book we've written
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);

  // send the book to the API
  const response = await fetch("http://localhost:5173/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
  const json = await response.json();

  console.log(json);
});

async function getBooks() {
  // get the books from our Database via our API
  const response = await fetch("http://localhost:5173/books");
  const books = await response.json();

  // loop through the books and render them on the page
 books.forEach(function (book) {
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    h3.textContent = book.book;
    p.textContent = book.author;

    const bookContainer = document.getElementById("bookContainer");

    bookContainer.appendChild(h3);
    bookContainer.appendChild(p);
  });
}

getBooks();