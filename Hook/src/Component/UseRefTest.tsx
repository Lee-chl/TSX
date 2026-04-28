import { useRef } from "react";

export default function UseRefTest(){
    const inputRef = useRef<HTMLInputElement>(null); // DOM 접근용
    const clickCountRef = useRef<number>(0); // 표시할 필요없는 값 저장용 / 리렌더링 되면서 값이 바뀌기 때문에 사용
    const handleClick = () =>{
        inputRef.current?.focus(); // {current:주소값}
        clickCountRef.current +=1; // {current:2}
        console.log(`클릭 횟수: ${clickCountRef.current}`);
    };

    return(
        <div>
            <input ref={inputRef} type="text" placeholder="입력하세요 "/>
            <button onClick={handleClick}>포커스 및 카운트 증가</button>
        </div>
    )
}