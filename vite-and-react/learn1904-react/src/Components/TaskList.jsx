import { DispatchContext } from "../assets/context";
import { useContext, useState } from "react";

export default function TaskList({ taskData, iden }) {
  let [text, setText] = useState(taskData.text);
  let [state, setState] = useState("save");
  let dispatch = useContext(DispatchContext);

  return (
    <li>
      {state == "save" && taskData.text}
      {state == "edit" && (
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      )}{" "}
      <input
        type="button"
        value={state == "save" ? "Edit" : "Save"}
        onClick={() => {
          if (state == "save") setState("edit");
          else {
            setState("save");
            dispatch({
              type: "edit",
              id: iden,
              text: text,
            });
          }
        }}
      />{" "}
      <input
        type="button"
        value="Delete"
        onClick={() => {
          dispatch({
            type: "delete",
            id: iden,
          });
        }}
      />
    </li>
  );
}
