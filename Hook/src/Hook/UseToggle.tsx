import { useState } from "react";

export function UseToggle(initial:boolean = false){
    const [value,setValue] = useState<boolean>(initial);

    const toggle = () =>{
        setValue((pre) => !pre);
    };
    return {value,toggle};
}