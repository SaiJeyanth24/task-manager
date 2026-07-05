
import React, { useState } from "react"
import "../styles/taskform.css"

export default function TaskForm({ onAdd }) {
    const [text, setText] = useState("")
    const [date, setDate] = useState(() => {
        const today = new Date()
        return today.toISOString().split("T")[0]
    })
    const [priority, setPriority] = useState("medium")

    const resetForm = () => {
        setText("")
        setDate(new Date().toISOString().split("T")[0])
        setPriority("medium")
    }

    const handleAdd = () => {
        if (!text.trim()) return

        onAdd({
            text,
            date,
            status: "incomplete",
            priority
        })
        resetForm()
    }

    return(
        <div className="task-form">
            <input
                type="text"
                value={text}
                onChange={(event) => setText(event.target.value)}
                placeholder="Add a new task"
            />
            <input
                type="date"
                value={date}
                min={date}
                onChange={(event) => setDate(event.target.value)}
                className="task-date"
                aria-label="Task due date"
            />
            <select
                value={priority}
                onChange={(event) => setPriority(event.target.value)}
                aria-label="Task priority"
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button type="button" onClick={handleAdd}>+ Add</button>
        </div>
    )
}