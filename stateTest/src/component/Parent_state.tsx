import { useState } from "react";
import Child1 from "./Chrild1_state";
import Child2 from "./Chirld2_state";

export default function ParentCompont(){
    const [inputValue,setInputValue] = useState<string>('');

    const handleInputChange = (value:string)=>{
        setInputValue(value);
    }

    return(
        <>
            <h1>State 올리기</h1>
            {/* 이제 Child1과 Child2는 정의된 타입에 맞는 Props를 전달받게 됩니다. */}
            <Child1 onInputchange={handleInputChange}/>
            <Child2 value={inputValue} />
        </>
    )
}