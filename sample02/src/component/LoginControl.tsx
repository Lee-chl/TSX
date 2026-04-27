import { useState } from "react";
import { Greeting, LogoutBtn,LoginBtn } from "./Login";

export default function LoginControl(){
    const [isLoginedIn,setInLoggedIn] = useState<boolean>(false);

    const handleLoginClick = () =>{
        setInLoggedIn(true);
    }

    const handelLogoutClick = () => {
        setInLoggedIn(false);
    }

    return(
        <>
            <Greeting login={isLoginedIn}/>
            {isLoginedIn? (<LogoutBtn onClick={handelLogoutClick} />)
            : (<LoginBtn onClick={handleLoginClick}/>)
            }
        </>
    )
}