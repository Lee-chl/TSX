import "./App.css";
import Welcome from "./component/Welcome";
import Text from "./component/Text";
import SayHello from "./component/SayHello";
import Library from "./component/Library";
import EventBasic from "./component/Event_time";
import LoginControl from "./component/LoginControl";
import { Card } from "./component/CompositionComponent";
import StateForm, { StateFormUC } from "./component/FormConponent";
import { useState } from "react";
import { ChildWithMemo,Child } from "./component/ReactMemo";

function App() {
  const [count,setCount] = useState<number>(0);
  const [text,setText] = useState<string>('');

  return (
    <>
      <Welcome name='HO' />
      <Welcome name='HA' />
      <Text text="버튼이다!" button="버튼생성"/>
      <Text text="두번째" button="버튼!"/>
      <SayHello myName="HAHA" to="rHA" />
      <Library/>
      <EventBasic type="date"/>
      <EventBasic type="time"/>
      <EventBasic type="all"/>
      <LoginControl />
      <div>
        <h1>합성 예제</h1>
        <Card>
          <h2> Card 1</h2>
          <p>This is the first card content</p>
          <button>Click me</button>
        </Card>
        <Card>
          <h2>Card 2</h2>
          <img src="https://placehold.co/100" alt="placehold"/>
        </Card>
      </div>
      <StateForm />
      <StateFormUC/>
      <Child value={count}/>
      <ChildWithMemo value={count} />
      <button onClick={() => setCount(count+1)}>count 증가</button>
      <input value={text} onChange={(e) => setText(e.target.value)}/>
    </>
  );
}

export default App;
