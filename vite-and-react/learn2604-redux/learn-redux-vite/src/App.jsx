import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./feature/counter/counterSlice";

export default function App() {
  let count = useSelector((state) => state.counter.value);
  let dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>{" "}
      <span>{count}</span>{" "}
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
