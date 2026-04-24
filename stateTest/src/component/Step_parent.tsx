import { useState } from "react";
import {StateCounter,ResetCount} from "./Step_chirld";

export default function StateParent(){
    const [count,SetCount] = useState<number>(0);
    const update = (step:number) => SetCount((c)=>c+step);
    const reset = () => SetCount(0);

    return(
        <>
            <p>총 갯수:{count}</p>
            <StateCounter step={1} countUpdate={update}/>
            <StateCounter step={5} countUpdate={update}/>
            <StateCounter step={-1} countUpdate={update}/>
            <ResetCount reset={reset}/>
        </>
    )
}

