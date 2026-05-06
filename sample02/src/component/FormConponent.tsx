import { useRef, useState } from "react";

export default function StateForm() {
  // 폼으로 취급하는 값을 State로 선언
  const [form, setForm] = useState({ name: "홍길동", age: 18 });
  // 폼 요소의 변경 사항을 State에 반영
  const hadleForm = (e:React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  //보내기 버튼으로 로그에 메세지 출력
  const show = () => {
    console.log(`안녕하세요,${form.name}(${form.age}세) 님`);
  };


  console.log('리랜더링');
  return (
    <form>
      <div>
        <label htmlFor="name">이름: </label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={hadleForm}
          value={form.name}
        />
      </div>
      <div>
        <label htmlFor="age">나이:</label>
        <input
          id="age"
          name="age"
          type="number"
          onChange={hadleForm}
          value={form.age}
        />
      </div>
      <div>
        <button type="button" onClick={show}>
          보내기
        </button>
      </div>
      <p>
        안녕하세요, {form.name} ({form.age}세)님
      </p>
    </form>
  );
}

export function StateFormUC() {
  // 리액트 요소에 대한 참조 준비
  const name = useRef(null);
  const age = useRef(null);

  // 요소(참조)를 통해 입력값 준비
  const show = () => {
    if(!name.current || !age.current) return;
    console.log(`안녕하세요 ${name.current.value} (${age.current.value}세)님`);
  };

  console.log('리랜더링')
  return (
    <form>
      <div>
        <label htmlFor="name">이름: </label>
        <input
          id="name"
          name="name"
          type="text"
          ref={name}
          defaultValue="홍길동"
        />
      </div>
      <div>
        <label htmlFor="age">나이: </label>
        <input id="age" name="age" type="number" ref={age} defaultValue="18" />
      </div>
      <div>
        <button type="button" onClick={show}>
          보내기
        </button>
      </div>
       <p> 안녕하세요, {name.current?.value}（{age.current?.value}세） 님！</p>
    </form>
  );
}
