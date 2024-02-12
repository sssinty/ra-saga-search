import { useContext, useState } from 'react'
import { nanoid } from "nanoid";
import { AuthContext } from '../AuthContext.jsx'

function BookStoreFormAdd({ onAddBook }) {
  const [title, setTitle] = useState();
  const { isAuthenticated } = useContext(AuthContext);

  const handlerSubmit = (event) => {
    event.preventDefault();
    if (!isAuthenticated) {
      alert('Только авторизованный пользователь может добавить книгу');
      return;
    }
    onAddBook({
      id: nanoid(),
      name: title
    });
    setTitle("");
  };

  const handlerChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <form onSubmit={handlerSubmit}>
      <input onChange={handlerChange} placeholder="Введите название книги" />
      <button>Добавить</button>
    </form>
  );
}

export default BookStoreFormAdd;
