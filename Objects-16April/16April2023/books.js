// Q1. Display all books that are available for issue.

// issueStatus : true -> already issued
// issueStatus : false -> available for issue

let books = [
  { id: 1, title: "The Road Ahead", author: "Bill Gates", issueStatus: true },
  {
    id: 2,
    title: "Homo Sapiens",
    author: "Yuval Noha Hararri",
    issueStatus: false,
  },
  { id: 3, title: "The 5am Club", author: "Robin Sharma", issueStatus: false },
  { id: 4, title: "Harry Potter", author: "J K Rowling", issueStatus: true },
  { id: 5, title: "Narnia", author: "C S Lewis", issueStatus: false },
];

for (let index = 0; index < books.length; index++) {
  if (books[index].issueStatus == true) {
    console.log(books[index].title + " this book is already issued.");
  } else {
    console.log(books[index].title + " this book is available for issue!");
  }
}

// books.forEach((book) => {
//   if (book.issueStatus == false) {
//     console.log(book.title);
//   }
// });

// books
//   .filter((book) => book.issueStatus == false)
//   .map((book) => console.log(book.title));
