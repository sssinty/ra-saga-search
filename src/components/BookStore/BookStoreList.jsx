function BookStoreList({ books, onRemove }) {
  return (
    <ol>
      {books.map((book) => (
        <li key={book.id}>
          {book.name} <button onClick={() => onRemove(book.id)}>Удалить</button>
        </li>
      ))}
    </ol>
  );
}

export default BookStoreList;
