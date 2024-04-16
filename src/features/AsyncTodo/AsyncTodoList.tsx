import { Todo } from "types";
import TodoItem from "components/TodoItem";
import { useAppDispatch } from "redux-hooks";
import { useDispatch, useSelector } from "react-redux";
import { selectAsyncTodos } from "./asyncTodoSelectors";
import { useEffect } from "react";
import { removeTodo, fetchAllTodos, toggleTodo } from "./todoAsyncActions";


const AsyncTodoList = () => {
    const { list } = useSelector(selectAsyncTodos)
    const dispatch = useAppDispatch()

    const handleDeleteTodo = (id: Todo['id']) => {
        dispatch(removeTodo(id))
    }

    const handleChangeCompleted = (id: Todo['id']) => {
        dispatch(toggleTodo(id))
    }

    useEffect(() => {
        console.log('A');
        dispatch(fetchAllTodos())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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

export default AsyncTodoList