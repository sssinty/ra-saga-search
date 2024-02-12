import { useContext } from 'react'
import { AuthContext } from './AuthContext.jsx'

function LoginButton () {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <button onClick={() => toggleAuth()}>{ isAuthenticated ? 'Выйти' : 'Войти'}</button>
  );
}

export default LoginButton
