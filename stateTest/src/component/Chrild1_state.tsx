import type React from "react";

interface ChildProps{
    onInputchange:(value:string)=>void;
}

export default function Child1({onInputchange}:ChildProps){
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        onInputchange(e.target.value);
    }

    return(
        <>
            <input type="text" onChange={handleChange} placeholder="입력하세요"/>
        </>
    );
}