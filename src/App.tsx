import { useEffect, useState } from 'react';
import './App.css';
import NewTodo from 'components/NewTodoForm';
import TodoItem from 'components/TodoItem';
import { Todo } from 'types';

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

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then((data: Todo[]) => {
        setTodos(data)
      })
  }, [])

  return (
    <div className="App">
      <NewTodo
        handleClick={addTodo}
      />
      <TodoItem completed={true} id='0' title='ds' style={{ border: '1px solid white' }} />
    </div>
  );
}

export default App;
