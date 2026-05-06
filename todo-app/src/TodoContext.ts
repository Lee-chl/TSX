import React, { createContext } from "react";
import type { Todo } from "./App";

// interface TodoContextType {
//   todos: Todo[];
//   onCreate: (content: string) => void;
//   onUpdate: (targetId: number) => void;
//   onDelete: (targetId: number) => void;
// }

// // 초기값 주고 createContext()
// const TodoContext = React.createContext<TodoContextType>({
//   todos: [],
//   onCreate: (content: string) => {},
//   onUpdate: (targetId: number) => {},
//   onDelete: (targetId: number) => {},
// });

// export default TodoContext;

interface TodoStateContextType {
  todos: Todo[];
}

export const TodoStateContext = createContext<TodoStateContextType>({
  todos: [],
});

interface TodoDispatchContextType {
  onCreate: (content: string) => void;
  onUpdate: (targetId: number) => void;
  onDelete: (targetId: number) => void;
}

export const TodoDispatchContext = createContext<TodoDispatchContextType>({
  onCreate: (content: string) => {},
  onUpdate: (targetId: number) => {},
  onDelete: (targetId: number) => {},
});
