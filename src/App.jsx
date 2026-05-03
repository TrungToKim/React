import reactLogo from './assets/react.svg'
import './App.scss'
import ListTodo from './TodoAPP/ListTodo'
import { BrowserRouter, Routes, Route, Link, } from 'react-router-dom';
import Nav from './Nav/Nav'
import { Home, Contact, Login, SignUp, ResetPassword } from './Web/indexWeb'
import ListUser from './User/ListUser';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Nav />
          {/* <ListUser /> */}
        </div>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Todo" element={<ListTodo />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
