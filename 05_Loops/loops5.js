const books = [
  { name: "To Kill a Mockingbird", publishedDate: "1960", genre: "Fiction" },
  { name: "1984", publishedDate: "1949", genre: "Dystopian" },
  { name: "The Great Gatsby", publishedDate: "1925", genre: "Fiction" },
  { name: "Pride and Prejudice", publishedDate: "1813", genre: "Romance" },
  {
    name: "The Catcher in the Rye",
    publishedDate: "1951",
    genre: "Coming-of-age",
  },
  { name: "The Hobbit", publishedDate: "1937", genre: "Fantasy" },
  { name: "The Lord of the Rings", publishedDate: "1954", genre: "Fantasy" },
  {
    name: "Harry Potter and the Philosopher's Stone",
    publishedDate: "1997",
    genre: "Fantasy",
  },
  { name: "The Da Vinci Code", publishedDate: "2003", genre: "Mystery" },
  { name: "The Alchemist", publishedDate: "1988", genre: "Fantasy" },
];

let userBooks = books.filter((bks) => {
  return bks.genre === "Mystery";
});
userBooks = books.filter((bks) => {
  return bks.genre === "Fantasy" || bks.publishedDate > 2000;
});
console.log(userBooks);
