import type { Member } from "../types/Member";
import Bts from "./Bts";
import NavigationBts from "./Navigation";
import { useState } from "react";
import './memberCard.css'

interface MemberProps {
  members: Member[];
}

function MemberCard({ members }: MemberProps) {
  const [idex_num, setIndex] = useState<number>(0);

  const changeIn = (newIndex:number):void =>{
    const len = members.length; 
    setIndex((newIndex+len) % len) // 순서 유지하기 위해
  }
  return (
    <div className="member-container">
      <Bts member={members[idex_num]} />
      <NavigationBts index={idex_num} changeIndex={changeIn} />
    </div>
  );
}

export default MemberCard;
