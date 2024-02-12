import { useState } from "react";
import { nanoid } from "nanoid";
import BookStoreFormSearch from "./BookStoreFormSearch";
import BookStoreList from "./BookStoreList";
import BookStoreFormAdd from "./BookStoreFormAdd";

function BookStore() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([
    {
      name: "Вы не знаете JS",
      id: nanoid()
    },
    {
      name: "Чистый код",
      id: nanoid()
    },
    {
      name: "Совершенный КОД",
      id: nanoid()
    }
  ]);

  const filteredBooks = () => {
    if (!search) {
      return books;
    }
    return books.filter((book) =>
      book.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  };

  const removeBook = (bookId) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
  };

  const addBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  return (
    <>
      <BookStoreFormSearch onSearch={setSearch} />
      <BookStoreList books={filteredBooks()} onRemove={removeBook} />
      <BookStoreFormAdd onAddBook={addBook} />
    </>
  );
}

export default BookStore;
