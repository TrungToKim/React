import reactLogo from './assets/react.svg'
import './App.css'
import ListTodo from './TodoAPP/ListTodo'

function App() {

  return (
    <div className="App">
      <img src={reactLogo} className="framework" alt="React logo" />
      <ListTodo />
    </div>
  )
}

export default App
