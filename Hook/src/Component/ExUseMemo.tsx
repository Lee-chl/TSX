import {  useMemo, useState } from "react";

interface Props {
  num: number;
}

export default function ExUseMemo({ num }: Props) {
  const expensiveCalc = (n: number) => {
    console.log("비싼 계산 실행 중");
    return n * 2;
  };

  const memoizedValue = useMemo(() => expensiveCalc(num), [num]);

  return <div>결과: {memoizedValue}</div>;
}

export function UseMemoTest() {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);
  const list = ["apple", "banana", "grape", "orange"];

  const filtered = useMemo(() => {
    console.log("필터 실행");
    return list.filter((item) => item.includes(query));
  }, [query]);

  return (
    <div>
      <h3>검색</h3>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="검색어 입력"
      />
      <h3>관련 없는 상태 변경</h3>
      <button onClick={() => setCount((pre) => pre + 1)}>
        Count 증가 {count}
      </button>
      <ul>
        {filtered.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}