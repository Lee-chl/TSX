import { useEffect, useState } from "react";

export function TimeTest(){
    const [time,setTime] = useState<number>(0);
    
    useEffect(()=>{
        console.log('타이머 시작');
        // setInterval은 id를 반환
        const id = setInterval(() =>{
                setTime((t)=>t+1);
        },1000);

        // clean up 
        // interval이 실행 시 마다 계속 쌓이기 때문에 clean up
        return() =>{
            console.log('타이머 정리');
            clearInterval(id);
        };
    },[time]);
    return <h1>{time}초</h1>
}