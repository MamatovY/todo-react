import { Todo } from "types";
import TodoItem from "components/TodoItem";
import { useAppDispatch } from "redux-hooks";
import { changeCompleted, deleteTodo } from "./todoSlice";
import { useSelector } from "react-redux";
import { selectAllTodos } from "./todoSelectors";


const TodoList = () => {
    const list = useSelector(selectAllTodos)
    const dispatch = useAppDispatch()

    const handleDeleteTodo = (id: Todo['id']) => {
        dispatch(deleteTodo(id))
    }

    const handleChangeCompleted = (id: Todo['id']) => {
        dispatch(changeCompleted(id))
    }

    return (
        <ul>
            {list.map(item => {
                return (
                    <TodoItem
                        {...item}
                        deleteTodo={handleDeleteTodo}
                        onChange={handleChangeCompleted}
                        key={item.id}
                    />
                )
            })}
        </ul>
    )
}

export default TodoList