import { useDispatch } from "react-redux";
import { increase } from "./actions";
export default function CountA() {
    const dispatch = useDispatch();
  return (
    <div>
      <button onClick={()=>dispatch(increase())}>
        <h1>+</h1>
      </button>
    </div>
  );
}
