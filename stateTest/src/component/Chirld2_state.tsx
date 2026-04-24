interface Child2Props{
    value:string;
}

export default function Child2({value}:Child2Props){
    return(
        <>  
            <p>입력된 값: {value}</p>
        </>
    )
}