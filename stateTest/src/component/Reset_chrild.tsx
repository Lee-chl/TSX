interface StateProps{
    reset: ()=>void;
}

export default function ResetCount({reset}:StateProps){
    return(
        <>
            <button onClick={reset}>
                <span>Reset</span>
            </button>
        </>
    )
}