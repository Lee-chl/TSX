import "./App.css";
import Display from "./Display";
import CountA from "./CountA";
import CountB from "./CounterB";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Display />
      <CountA />
      <CountB />
    </Provider>
  );
}

export default App;
