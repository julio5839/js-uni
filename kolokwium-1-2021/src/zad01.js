const books = require("./books.js");

const result = books.booksArray.reduce((acc, book) => {
  const { title, author } = book;

  if (Array.isArray(book.genre)) {
    book.genre.map((genre) => {
      if (acc[genre]) {
        acc[genre].push({ title, author });
      } else {
        acc[genre] = [{ title, author }];
      }
    });
  } else if (acc[book.genre]) {
    acc[book.genre].push({ title, author });
  } else {
    acc[book.genre] = [{ title, author }];
  }

  return acc;
}, {});

// console.log(result);
