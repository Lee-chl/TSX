import "./App.css";
import type { Member } from "./types/Member";
import MemberCard from "./component/MemberCard";
import React from "react";
import Bts from "./component/Bts";

function App() {
  const members: Member[] = [
    { image: "/bts/bts1.png", nick: "RM" },
    { image: "/bts/bts2.png", nick: "진" },
    { image: "/bts/bts3.png", nick: "슈가" },
    { image: "/bts/bts4.png", nick: "제이홉" },
    { image: "/bts/bts5.png", nick: "지민" },
    { image: "/bts/bts6.png", nick: "뷔" },
    { image: "/bts/bts7.png", nick: "정국" },
  ];
 
  return (
        <div>
          <MemberCard members={members}/>
          {members.map((member)=>(
            <React.Fragment key={member.nick}>
              <Bts member={member}/>
            </React.Fragment>
          ))}
        </div>
  );
}

export default App;
