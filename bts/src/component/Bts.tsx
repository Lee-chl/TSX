import type { Member } from "../types/Member"
import './BtsCard.css'
interface BtsProps{
    member:Member;
}

export default function Bts({member}:BtsProps){
    // 객체 분해 
    const {image,nick} = member;
    return(
        <div className="member-card">
            <img src={image} alt={nick} className="photo"/>
            <h2 className="nick">{nick}</h2>
            <h4 className="team">BTS</h4>
        </div>
    )
}