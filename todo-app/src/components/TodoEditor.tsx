import React, { useContext, useRef, useState } from "react";
import "./TodoEditor.css";
import { TodoDispatchContext } from "../TodoContext";

function TodoEditor() {
  const [content, setContent] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { onCreate } = useContext(TodoDispatchContext);

  // 이벤트 핸들러의 타입을 맞추기 위해 따로 const 만들어서 넣어준다.
  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    // Content가 없으면 Input에 포커스 가고 값이 추가 안되게 하기
    if (!content) {
      inputRef.current?.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  // 키보드 엔터 처리
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="TodoEditor">
      <h4>새로운 TODO 작성하기 📝</h4>
      <div className="editor-wapper">
        <input
          type="text"
          placeholder="새로운 TODO"
          onChange={onChangeContent}
          ref={inputRef}
          onKeyDown={onKeyDown}
          value={content}
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
}

export default TodoEditor;
