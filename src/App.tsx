import { useEffect, useState } from 'react';
import './App.css';
import NewTodo from 'components/NewTodoForm';
import TodoItem from 'components/TodoItem';
import { Todo } from 'types';
import TodoList from 'components/TodoList';

type ITodo = {
  id: string,
  title: string,
  completed: boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: new Date().toString(),
      title: text,
      completed: false
    }
    setTodos([newTodo, ...todos])
  }

  const changeCompleted = (id: Todo['id']) => {
    const newTodos = todos.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item
    })
    setTodos(newTodos)
  }

  const deleteTodo = (id: Todo['id']) => {
    const newTodos = todos.filter(item => item.id !== id)
    setTodos(newTodos)
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => res.json())
      .then((data: Todo[]) => {
        setTodos(data)
      })
  }, [])

  console.log(todos);

  return (
    <div className="App">
      <NewTodo
        handleClick={addTodo}
      />

      <TodoList
        list={todos}
        changeCompleted={changeCompleted}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
