import NewItem from "components/NewItem"
import { useAppDispatch } from "redux-hooks"
import { createTodo } from "./todoAsyncActions"


const NewAsyncTodo = () => {
    const dispatch = useAppDispatch()

    const handleNewTodo = (title: string) => {
        dispatch(createTodo(title))
    }


    return <NewItem handleClick={handleNewTodo} placeholder="Введите текст" />
}

export default NewAsyncTodo