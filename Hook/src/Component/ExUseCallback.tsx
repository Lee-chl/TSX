import { useCallback, useState } from "react";

// useCallback
export function ParentComponet(){
    const [count,setCount] = useState(0);

    const handleClick = useCallback(() =>{
        console.log('버튼 클릭');
    },[])

    return(
        <div>
            <button onClick={handleClick} />
            <button onClick={() => setCount((rev)=>rev+1)}>카운트 증가 {count}</button>
        </div>
    );
}
