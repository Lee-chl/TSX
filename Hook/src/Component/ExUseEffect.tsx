import { useEffect, useState } from "react";

export default function ExUseEffect(){
    const [ count,setCount] = useState<number>(0);

    useEffect(() => {
        document.title = `${count}번 클릭했습니다.`
    },[count]);// 의존성배열, 변경되었을때 useEffect가 실행되어야하는 변수들
			    // [](빈배열)일 경우 최초 한번만,생략할때는 랜더링될때마다 실행

    return (
        <div>
            <p>{count}번 클릭했습니다</p>
            <button onClick={() => setCount((prev) => prev+1)}>클릭 </button>
        </div>
    );
}