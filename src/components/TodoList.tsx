import { Todo } from "types";
import TodoItem from "./TodoItem";


interface TodoListProps {
    list: Todo[],
    changeCompleted: (id: Todo['id']) => void,
    deleteTodo: (id: Todo['id']) => void,
}

const TodoList = ({ list, changeCompleted, deleteTodo }: TodoListProps) => {
    return (
        <ul>
            {list.map(item => {
                return (
                    <TodoItem
                        {...item}
                        deleteTodo={deleteTodo}
                        onChange={changeCompleted}
                        key={item.id}
                    />
                )
            })}
        </ul>
    )
}

export default TodoList