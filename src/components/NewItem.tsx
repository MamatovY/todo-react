import { addTodo } from "features/Todo/todoSlice";
import { useRef } from "react";
import { useAppDispatch } from "redux-hooks";

interface NewItemProps {
    placeholder: string,
    handleClick: (text: string) => void
}

const NewItem = ({ placeholder, handleClick }: NewItemProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null)

    const onClick = () => {
        if (inputRef.current?.value) {
            handleClick(inputRef.current.value)
            inputRef.current.value = ''
        }
    }

    return (
        <>
            <input
                type="text"
                placeholder={placeholder}
                ref={inputRef}
            />
            <button onClick={onClick}>Add todo</button>
        </>
    )
}


export default NewItem;