import React, { useContext, useReducer, useRef } from 'react';
import './App.css';
import Editor from './components/Editor';
import TodoItem from './components/TodoItem';
import { Todo } from './types';

type Action =
  | {
    type: "CREATE";
    data: {
      id: number;
      content: string;
    }
  } | {
    type: "DELETE"; id: number;
  }

function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case 'CREATE': {
      return [...state, action.data];
    }
    case 'DELETE': {
      return state.filter((it) => it.id !== action.id);
    }
  }
}

export const TodoStateContext = React.createContext<Todo[] | null>(null);
export const TodoDispatchContext = React.createContext<{
  onClickAdd: (text: string) => void;
  onClickDelete: (id: number) => void;
} | null>(null);

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error("TodoDispatchContext error");
  return dispatch;
}

function App() {
  const idRef = useRef(0);
  const [todos, dispatch] = useReducer(reducer, []);

  const onClickAdd = (text: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content: text
      }
    })
  }

  const onClickDelete = (id: number) => {
    dispatch({
      type: "DELETE",
      id: id
    })
  }

  return (
    <div className="App">
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider
          value={{
            onClickAdd,
            onClickDelete
          }}
        >
        <h1>todo</h1>
        <Editor />
        <div>
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </div>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
