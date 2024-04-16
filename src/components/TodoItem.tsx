import { Todo } from "types"

interface TodoItemProps extends Todo {
    onChange: (id: string) => void,
    deleteTodo: (id: string) => void,
    style?: React.CSSProperties
}

const TodoItem = ({ id, title, completed, style, onChange, deleteTodo }: TodoItemProps) => {
    return (
        <li style={{ ...style }} className={completed ? "completed" : ""}>
            <input className="toggle" type="checkbox" onChange={() => onChange(id)} checked={completed} />
            <span>{title}</span>
            <span onClick={() => deleteTodo(id)} className="destroy">&times;</span>
        </li>
    )
}

export default TodoItem 