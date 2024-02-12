import { useState } from "react";

function BookStoreFormSearch({ onSearch }) {
  const [search, setSearch] = useState();

  const handlerSubmit = (e) => {
    e.preventDefault()
    onSearch(search);
    setSearch("");
  };

  const handlerChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <form onSubmit={handlerSubmit}>
        <input placeholder="Введите название книги" value={search} onChange={handlerChange} />
        <button>Искать</button>
      </form>
    </>
  );
}

export default BookStoreFormSearch;
