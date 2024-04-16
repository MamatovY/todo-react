import { useAppDispatch } from "redux-hooks"
import { addTodo } from "./todoSlice"
import NewItem from "components/NewItem"


const NewTodo = () => {
    const dispatch = useAppDispatch()

    const handleNewTodo = (title: string) => {
        dispatch(addTodo(title))
    }


    return <NewItem handleClick={handleNewTodo} placeholder="Введите текст" />
}

export default NewTodo