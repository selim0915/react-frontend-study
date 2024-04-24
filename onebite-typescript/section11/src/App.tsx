import React, { useRef, useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import { Todo } from './types';
import TodoItem from './components/TodoItem';

function App() {
  const idRef = useRef(0);
  const [todos, setTodos] = useState<Todo[]>([]);

  const onClickAdd = (text: string) => {
    setTodos([
      ...todos,
      {
        id: idRef.current++,
        content: text
      }
    ]);
  }

  const onClickDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="App">
      <h1>todo</h1>
      <Editor onClickAdd={onClickAdd} />
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} onClickDelete={onClickDelete} />
        ))}
      </div>
    </div>
  );
}

export default App;
