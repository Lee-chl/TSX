import "./App.css";
import Welcome from "./component/Welcome";
import Text from "./component/Text";
import SayHello from "./component/SayHello";
import Library from "./component/Library";
import EventBasic from "./component/Event_time";

function App() {
  return (
    <>
      <Welcome name='HO' />
      <Welcome name='HA' />
      <Text text="버튼이다!" button="버튼생성"/>
      <Text text="두번째" button="버튼!"/>
      <SayHello myName="HAHA" to="HA" />
      <Library/>
      <EventBasic type="date"/>
      <EventBasic type="time"/>
      <EventBasic type="all"/>
    </>
  );
}

export default App;
