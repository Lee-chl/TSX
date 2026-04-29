import { useReducer, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

const mockTodos = [
  {
    id: 0,
    isDone: false,
    content: "javascript 공부",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "AI 공부하기",
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "React 공부하기",
    createDate: new Date().getTime(),
  },
];

export interface Todo {
  id: number;
  isDone: boolean;
  content: string;
  createDate: number;
}

type Action =
  | { type: "CREATE"; newItem: Todo }
  | { type: "UPDATE"; targetId: number }
  | { type: "DELETE"; targetId: number };

function reducer(todos: Todo[], action: Action) {
  switch (action.type) {
    case "CREATE":
      return [action.newItem, ...todos];
      
    case "UPDATE": {
      return todos.map((td) =>
        td.id === action.targetId ? { ...td, isDone: !td.isDone } : td,
      );
    }
    case "DELETE": {
      return todos.filter((td) => td.id !== action.targetId);
    }
    default:
      return todos;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockTodos);
  //  id 는 화면에 노출되면 안되므로 ref 사용해서 관리
  const idRef = useRef(3);

  const onCreate = (content: string) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createDate: new Date().getTime(),
    };
    // set할때마다 새로운 객체가 생성되어서 기존 객체에 있는 것을 ...으로 넣어줘야한다.
    dispatch({type:'CREATE',newItem})
    idRef.current += 1;
  };

  const onUpdate = (targetId: number) => {
    dispatch({type:'UPDATE',targetId})
  };

  const onDelete = (targetId: number) => {
    dispatch({type:'DELETE',targetId})
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
