import { useState } from "react";
import "./ListItem.css";

export default function ListItem({ data, onChangeName, onDeleteName }) {
  let [status, setStatus] = useState("value");
  let [changeName, setChangeName] = useState({
    id: undefined,
    name: data.name,
  });

  return (
    <div key={data.id}>
      <input type="checkbox" name="check" id="check" />
      {status === "editing" && (
        <input
          type="text"
          name="name"
          id={data.id}
          value={changeName.name}
          onChange={(e) => {
            setChangeName({
              id: e.target.id,
              name: e.target.value,
            });
          }}
        />
      )}
      {status === "value" && <span>{data.name}</span>}
      {status === "value" && (
        <input
          type="button"
          value="Edit"
          onClick={() => {
            setStatus("editing");
          }}
        />
      )}
      {status === "editing" && (
        <input
          type="button"
          value="Save"
          onClick={() => {
            setStatus("value");
            onChangeName(changeName);
          }}
        />
      )}
      <input
        type="button"
        value="Delete"
        id={data.id}
        onClick={(e) => {
          onDeleteName(e.target.id);
        }}
      />
    </div>
  );
}
