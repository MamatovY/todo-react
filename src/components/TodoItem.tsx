import { Todo } from "types"

interface TodoItemProps extends Todo {
    style?: React.CSSProperties
}

const TodoItem = ({ id, title, completed, style }: TodoItemProps) => {
    return (
        <li style={{ color: 'red', backgroundColor: 'white', ...style }} className={completed ? "completed" : ""}>
            <input className="toggle" type="checkbox" checked={completed} />
            <span>{title}</span>
            <button className="destroy">&times;</button>
        </li>
    )
}

export default TodoItem 