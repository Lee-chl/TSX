interface StateCountProps {
  step: number;
  countUpdate: (value: number) => void; // 숫자 받아 상태를 업데이트하는 함수
}

function StateCounter({ step, countUpdate }: StateCountProps) {
  const handleChange = () => countUpdate(step);

  return (
    <>
      <button onClick={handleChange}>
        <span>{step}</span>
      </button>
    </>
  );
}

interface StateProps{
    reset: ()=>void;
}

function ResetCount({reset}:StateProps){
    return(
        <>
            <button onClick={reset}>
                <span>Reset</span>
            </button>
        </>
    )
}

export{StateCounter,ResetCount}