import { useState } from "react";

interface clickProps{
    click_num:number;
}

export default function ClickState({click_num}:clickProps){
    const [count,setCount] = useState<number>(click_num);
    const handleClick = ():void =>{
        // 상태를 변경해야 React가 화면을 다시 그린다. 
        setCount(count+1);
        setCount(count+1); // 실행 시 동일하게 count의 수가 넘어오기 때문에 
        setCount((prev)=> prev+1);
    };

    return(
        <>
            <h1>클릭 카운터</h1>
            <p>현재 클릭 수 {count}</p>
            <button onClick={handleClick}>Click</button>
        </>
    )
}