import { useCallback, useMemo, useReducer, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import { TodoDispatchContext, TodoStateContext } from "./TodoContext";

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
  let result;
  switch (action.type) {
    case "CREATE": {
      // set할때마다 새로운 객체가 생성되어서 기존 객체에 있는 것을 ...으로 넣어줘야한다.
      result = [action.newItem, ...todos];
      break;
    }
    case "UPDATE": {
      result = todos.map((td) =>
        td.id === action.targetId ? { ...td, isDone: !td.isDone } : td,
      );
      break;
    }
    case "DELETE": {
      result = todos.filter((td) => td.id !== action.targetId);
      break;
    }
    default:
      result = todos;
  }
  localStorage.setItem("todos", JSON.stringify(result)); // JSON.stringify() => Json으로 바낀다. / 로컬스토리지로 저장
  return result;
}

function App() {
  const stored = localStorage.getItem("todos");
  const initTodos: Todo[] = stored ? JSON.parse(stored) : []; // JSON.parse() json을 객체로 반환해주는 함수
  const [todos, dispatch] = useReducer(reducer, initTodos);
  const initId = Number(localStorage.getItem("todoId") ?? 1);
  //  id 는 화면에 노출되면 안되므로 ref 사용해서 관리
  const idRef = useRef(initId);

  const onCreate = useCallback((content: string) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createDate: new Date().getTime(),
    };
    dispatch({ type: "CREATE", newItem });
    idRef.current += 1;
    localStorage.setItem("todoId", JSON.stringify(idRef.current));
  }, []);

  const onUpdate = useCallback((targetId: number) => {
    dispatch({ type: "UPDATE", targetId });
  }, []);

  const onDelete = useCallback((targetId: number) => {
    dispatch({ type: "DELETE", targetId });
  }, []);

  const dispatches = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, [onCreate, onUpdate, onDelete]);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={{ todos }}>
        <TodoDispatchContext.Provider value={dispatches}>
          <TodoEditor />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
