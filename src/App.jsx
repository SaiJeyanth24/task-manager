import TaskForm from "./components/TaskForm"
import Filter from "./components/Filter"
import TaskManager from "./components/TaskManager"
import React from "react"

function App() {

  const [tasks, setTasks] = React.useState(() => {
    if (typeof window === "undefined") return []

    try {
      const storedTasks = localStorage.getItem("taskmanagerappContext")
      return storedTasks ? JSON.parse(storedTasks) : []
    } catch {
      return []
    }
  })

  const [selectedFilter, setSelectedFilter] = React.useState("all")

  const activeTasks = tasks.filter((task) => task.status === "incomplete")
  const completedTasks = tasks.filter((task) => task.status === "complete")

  const setTasksAndStore = (updater) => {
    setTasks((prevTasks) => {
      const nextTasks = typeof updater === "function" ? updater(prevTasks) : updater
      try {
        localStorage.setItem("taskmanagerappContext", JSON.stringify(nextTasks))
      } catch {
        // ignore storage errors
      }
      return nextTasks
    })
  }

  const addTask = (task) => {
    setTasksAndStore((prevTasks) => [task, ...prevTasks])
  }

  const toggleTaskStatus = (taskToToggle, completed) => {
    setTasksAndStore((prevTasks) => {
      const updatedTask = {
        ...taskToToggle,
        status: completed ? "complete" : "incomplete"
      }

      const remainingTasks = prevTasks.filter((task) => task !== taskToToggle)
      if (completed) {
        return [...remainingTasks, updatedTask]
      }
      return [updatedTask, ...remainingTasks]
    })
  }

  const deleteTask = (taskToDelete) => {
    setTasksAndStore((prevTasks) => prevTasks.filter((task) => task !== taskToDelete))
  }

  const getTasksForFilter = () => {
    if (selectedFilter === "active") return activeTasks
    if (selectedFilter === "completed") return completedTasks
    return tasks
  }

  return (
    <>
      <div id='task-manager'>
        <h2>Task Manager</h2>
        <TaskForm onAdd={addTask} />
        <Filter
          allTasks={tasks}
          activeTasks={activeTasks}
          completedTasks={completedTasks}
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
        />
        <TaskManager tasks={getTasksForFilter()} onToggleTask={toggleTaskStatus} onDeleteTask={deleteTask} />
      </div>
    </>
  )
}

export default App
