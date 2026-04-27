type GreetingProps= {
    login:boolean;
}

function Login(){
    return <h1> 환영합니다! </h1>
}

function Guest(){
    return <h1>회원 가입 해주세요</h1>
}

function Greeting({login}:GreetingProps){
    return login?<Login />:<Guest />;
}

type BtnProps = {
    onClick: () => void;
}

function LoginBtn({onClick}:BtnProps){
    return <button onClick={onClick}>로그인</button>
}

function LogoutBtn({onClick}:BtnProps){
    return <button onClick={onClick}>로그아웃</button>
}

export {Greeting, LoginBtn,LogoutBtn}