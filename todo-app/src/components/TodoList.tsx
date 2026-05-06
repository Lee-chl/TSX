import "./TodoList.css";
import TodoItem from "./TodoItem";
import { useContext, useMemo, useState } from "react";
import { TodoStateContext } from "../TodoContext";

function TodoList() {
  const [search, setSearch] = useState<string>("");
  const { todos } = useContext(TodoStateContext);

  const inputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getSearch = () => {
    return search === ""
      ? todos
      : // 대소문자 상관없이 나오게 하기 위해 값 과 serach값을 소문자로 바꾸기
        todos.filter((td) =>
          td.content.toLowerCase().includes(search.toLowerCase()),
        );
  };

  const analyzeTodo = useMemo(() => {
    // {totalCount, doneCount,notdoneCount }
    console.log("analyzeTodo 호출");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notdoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notdoneCount,
    };
  }, [todos]);

  const { totalCount, doneCount, notdoneCount } = analyzeTodo;

  return (
    <div className="TodoList">
      <h4>ToDoList</h4>
      <div>
        <div>총 갯수: {totalCount}</div>
        <div>완료된 할일: {doneCount}</div>
        <div>미 완료된 할일: {notdoneCount}</div>
      </div>
      <input
        type="text"
        className="searchbar"
        placeholder="검색어를 입력하세요"
        onChange={inputSearch}
      />
      <div>
        {getSearch().map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
