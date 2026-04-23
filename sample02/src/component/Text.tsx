interface TextProps{
    text:string;
    button:string;
}
function Text(props:TextProps){
    return(
        <>
            <h1>{props.text}</h1>
            <button>{props.button}</button>
        </>
    )
}

export default Text;