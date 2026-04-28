import { useReducer } from "react";

type Action = 'INC' | 'DEC';
// type Action = {type: 'INC'}|{type:'DEC'};

function countReducer(current:number,action:Action):number{
    if(action === 'INC'){
        return current +1;
    }else if(action === 'DEC'){
        return current -1;
    }
    return current;
}

export default function UseReducerTest(){
    const [count,dispatch] = useReducer(countReducer,0);

    function increase():void{
        dispatch('INC')
    }

    function decrease():void{
        dispatch('DEC')
    }

    return(
        <div>
            <input type='button' value='-' onClick={decrease} />
            <input type='button' value='+' onClick={increase} />
            <span>{count}</span>
        </div>
    )
}

type State = {email:string; password:string}

type Action2 =
    | {type: 'CHANGE_EMAIL'; value:string}
    | {type:'CHANGE_PASSWORD'; value:string}
    | {type:'RESET';};

    function reducer(state:State,action:Action2){
        switch(action.type){
            case 'CHANGE_EMAIL':
                return {...state,email:action.value}; break;
            case 'CHANGE_PASSWORD':
                return{...state,password:action.value}; break;
            case 'RESET':
                return{email:'',password:''};
            default: return state;
        }
    }

    export function Login(){
        const [state,dispatch] = useReducer(reducer,{email:'',password:''});

        return(
            <>
                <input placeholder="email" value={state.email} onChange={(e)=>dispatch({type:'CHANGE_EMAIL', value:e.target.value})} />
                <input placeholder="password" value={state.password} onChange={(e)=> dispatch({type:'CHANGE_PASSWORD',value:e.target.value})}/>
                <button onClick={() => dispatch({type:'RESET'})}>reset</button>
                <p>{state.email}</p>
                <p>{state.password}</p>
            </>
        )
    }
