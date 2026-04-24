import './memberCard.css'

interface NavigationProps{
    index:number;
    changeIndex:(num:number) =>void;
}

export default function NavigationBts({index,changeIndex}:NavigationProps){
    const nextBtnClick = ():void =>{
        changeIndex(index+1);
    }

    const beforeBtnClick = ():void =>{
        changeIndex(index-1);
    }
    return(
        <div className="button-container">
            <button className='nav' onClick={beforeBtnClick}>⬅️ 이전</button>
            <button className='nav' onClick={nextBtnClick}>다음 ➡️</button>
        </div>
    )
}