import { useEffect, useState } from "react";

interface User {id:number,name:string,email:string}

export default function UserList(){
    const [ users,setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data:User[]) => setUsers(data));
    },[]);

    return(
        <ul>
            {users.map((user)=> (
                <li key={user.id}>{user.name} ({user.email})</li>
            ))}
        </ul>
    );
}

export function UserList2(){
    const [users,setUsers] = useState<User[]>([]);
    const [error,setError] = useState<string | null>(null);

    useEffect(()=>{
        const load = async () => {
            try{
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                if(!res.ok){
                    throw new Error('요청 실패');
                }
                
                const data:User[] = await res.json();
                setUsers(data);
            }catch(err){
                if(err instanceof Error) {setError(err.message)}
            }
        };
        load();
    },[])

    if (error) return <p>{error}</p>

    return(
        <ul>
            {users.map((user)=>(
                <li key={user.id}>
                    {user.name} ({user.email})
                </li>
            ))}
        </ul>
    );
}