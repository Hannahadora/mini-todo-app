import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList'
import ProgressBar from './components/ProgressBar'
import RemoveCompleted from './components/RemoveCompleted'
import EditTodoForm from './components/EditTodoForm'

function App() {

  return (
    <div className="main">
      <h1 className='title'>TODO LIST</h1>
      <AddTodoForm />
     
      <TodoList />
      <footer>
        <ProgressBar />
        <RemoveCompleted />
      </footer>
    </div>
  )
}

export default App
