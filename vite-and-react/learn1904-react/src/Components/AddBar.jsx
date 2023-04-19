import { useContext, useRef, useState } from "react";
import { DispatchContext } from "../assets/context";

export default function AddBar() {
  let [iden, setIden] = useState(0);
  let [value, setValue] = useState("");
  let dispatch = useContext(DispatchContext);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />{" "}
      <input
        type="button"
        value="Add"
        onClick={() => {
          setIden(iden + 1);
          dispatch({
            type: "add",
            id: iden,
            text: value,
          });
        }}
      />
    </div>
  );
}
