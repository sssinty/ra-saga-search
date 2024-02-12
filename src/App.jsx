// import BookStore from './components/BookStore/BookStore.jsx'
import './App.css'
import Skills from "./components/Skills";
import {Route, Routes} from 'react-router-dom';

// process.env.VITE_APP_MY_URL
function App() { 
  return (
    <Routes>
      <Route path="/" element={<Skills />}/>
    </Routes>
  )
}

export default App
