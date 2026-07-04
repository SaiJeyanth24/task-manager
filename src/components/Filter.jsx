import "../styles/filter.css"

export default function Filter() {
    return (
        <div className="task-filter-buttons">
            <button type="button" className="filter-btn active">All</button>
            <button type="button" className="filter-btn">Active</button>
            <button type="button" className="filter-btn">Completed</button>
        </div>
    )
}