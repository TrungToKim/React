import reactLogo from './assets/react.svg'
import './App.scss'
import ListTodo from './TodoAPP/ListTodo'
import { BrowserRouter, Routes, Route, Link, } from 'react-router-dom';
import Nav from './Nav/Nav';
import home from './Web/home';
import contact from './Web/contact';
import about from './Web/about';

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Nav />
          <img src={reactLogo} className="framework" alt="React logo" />
          {/* <ListTodo /> */}
        </div>
        <Routes>
          <Route path="/" element={<home />} />
          <Route path="/todo" element={<ListTodo />} />
          <Route path="/about" element={<about />} />
          <Route path="/contact" element={<contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
