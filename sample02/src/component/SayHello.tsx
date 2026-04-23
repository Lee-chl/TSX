interface SayHelloProps{
    myName:string;
    to: string;
}

export default function SayHello({myName,to}:SayHelloProps){
    return(
        <>  
            <p>안녕하세요. {myName}</p>
            <p>Hello {to}!</p>
        </>
    );
}