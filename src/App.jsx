import reactLogo from './assets/react.svg'
import './App.css'
import ListTodo from './TodoAPP/ListTodo'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <img src={reactLogo} className="framework" alt="React logo" />
      <ListTodo />
    </div>
  )
}

export default App
