import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="tasks js-newTasks">{
        tasks.map(task => (
            <li
                key={task.id}
                className={`task ${task.done && hideDoneTasks ? "tasks__item--hidden" : ""}`}>
                <button className="task__button task__button--done js-done">{task.done ? "✔️" : ""}</button>
                <span className={`task__content ${task.done ? "task__content--done" : ""}`}>{task.content}</span>
                <button className="task__button task__button--remove js-remove">🗑</button>
            </li>
        ))
    }</ul>
)
export default Tasks;