import TaskForm from "./components/TaskForm"
import Filter from "./components/Filter"
import TaskManager from "./components/TaskManager"

function App() {
  return (
    <>
      <div id='task-manager'>
        <h2>Task Manager</h2>
        <TaskForm />
        <Filter />
        <TaskManager />
      </div>
    </>
  )
}

export default App
