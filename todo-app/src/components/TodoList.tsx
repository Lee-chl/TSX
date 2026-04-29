import "./TodoList.css";
import TodoItem from "./TodoItem";
import type { Todo } from "../App";
import { useState } from "react";

interface todoListProps {
  todos: Todo[];
  onUpdate: (targetId:number) =>void;
  onDelete:(targetId:number) => void;
}

function TodoList({ todos,onUpdate,onDelete }: todoListProps) {
  const [search, setSearch] = useState<string>("");

  const inputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getSearch = () => {
    return search === ""
      ? todos
      // 대소문자 상관없이 나오게 하기 위해 값 과 serach값을 소문자로 바꾸기
      : todos.filter((td) => td.content.toLowerCase().includes(search.toLowerCase()));
  };

  return (
    <div className="TodoList">
      <h4>ToDoList</h4>
      <input
        type="text"
        className="searchbar"
        placeholder="검색어를 입력하세요"
        onChange={inputSearch}
      />
      <div>
        {getSearch().map((todo) => (
          <TodoItem todo={todo} key={todo.id} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
