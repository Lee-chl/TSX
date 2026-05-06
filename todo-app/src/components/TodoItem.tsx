import "./TodoItem.css";
import { type Todo } from "../App";
import React, { useContext } from "react";
import { TodoDispatchContext } from "../TodoContext";

interface todoProps {
  todo: Todo;
}

function TodoItem({ todo }: todoProps) {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  console.log(`${todo.id} TodoItem update`);
  const onChangeCheck = () => {
    onUpdate(todo.id);
  };

  const onDeleteItem = () => {
    onDelete(todo.id);
  };

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input type="checkbox" checked={todo.isDone} onChange={onChangeCheck} />
      </div>
      <div className="title_col">{todo.content}</div>
      <div className="date_col">
        {new Date(todo.createDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onDeleteItem}>삭제</button>
      </div>
    </div>
  );
}

export default React.memo(TodoItem);
